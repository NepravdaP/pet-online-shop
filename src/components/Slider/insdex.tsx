import React from "react";
import { Fade, SlideshowProps } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { games } from "./constants";
import { SliderContainer } from "./styled";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Slider = () => {
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

  return (
    <SliderContainer>
      <Fade {...FadeProperties}>
        {games.map((el) => (
          <div className="each-slide" key={el.img}>
            <div
              className="img-el"
              style={{ backgroundImage: `url(${el.img})` }}
            >
              <div className="game-platform" style={{ color: el.color }}>
                {el.ps && (
                  <FontAwesomeIcon className="platform-icon" icon={faApple} />
                )}
                {el.pc && (
                  <FontAwesomeIcon className="platform-icon" icon={faWindows} />
                )}
                {el.xbox && (
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
