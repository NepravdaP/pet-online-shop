import React, { FC, useEffect, useState } from "react";
import { Fade, SlideshowProps } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { SliderContainer } from "./styled";
import "./style.css";
import { GamesItem } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faChevronRight,
  faStar,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";

const Slider: FC = () => {
  const [products, setProducts] = useState<GamesItem[]>([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/all");
      setProducts(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const FadeProperties: SlideshowProps = {
    transitionDuration: 1800,
    duration: 3000,
    infinite: true,
    prevArrow: (
      <FontAwesomeIcon className="slider-btn-left" icon={faChevronLeft} />
    ),
    nextArrow: (
      <FontAwesomeIcon className="slider-btn-right" icon={faChevronRight} />
    ),
  };

  // const products = await fetch("http://localhost:5000/api/products/all");

  return (
    <SliderContainer>
      <Fade {...FadeProperties}>
        {products.map((el) => (
          <div className="each-slide" key={el.image}>
            <div
              className="img-el"
              style={{ backgroundImage: `url(${el.image})` }}
            >
              <div className="game-platform" style={{ color: el.color }}>
                {el.mac && (
                  <FontAwesomeIcon className="platform-icon" icon={faApple} />
                )}
                {el.win && (
                  <FontAwesomeIcon className="platform-icon" icon={faWindows} />
                )}
                {el.linux && (
                  <FontAwesomeIcon className="platform-icon" icon={faLinux} />
                )}
              </div>
              <div className="game-info" style={{ color: el.color }}>
                <div className="game-title">{el.title}</div>
                <div className="rating-pricing">
                  <div className="game-rating">
                    {Array.from(new Array(Math.ceil(el.rating)).keys()).map(
                      () => (
                        <FontAwesomeIcon
                          key={Math.random() * 1000}
                          className="star-icon"
                          icon={faStar}
                        />
                      )
                    )}
                  </div>
                  <div className="game-price">{el.price}$</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </SliderContainer>
  );
};

export default Slider;
