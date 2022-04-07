import React, { FC, useState, useEffect } from "react";
import "./style.css";

import SearchBar from "../SearchBar";
import { GamesItem } from "../DropdownSearch/types";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProductSearcWrapper,
  ProductPageWrapper,
  ProductsWrapper,
  ProductCard,
} from "./styled";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import DropdownFilter from "./DropdownFilter";
import useDebounce from "../../hooks/useDebounce";
import { FilterValues } from "./types";

const Products: FC = () => {
  const cartStore = JSON.parse(localStorage.Cart || "[]");
  const { search } = useLocation();
  const [isFiltersVisible, setIsFilterVisible] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [cart, setCart] = useState<GamesItem[]>(cartStore);
  const [filterValues, setFilterValues] = useState<FilterValues>();
  const [searchResult, setSearchResult] = useState<GamesItem[]>([]);
  const [queryString, setQueryString] = useState("");
  const [value, setValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [products, setProducts] = useState<GamesItem[]>([]);
  const debouncedValue = useDebounce(value, 300);
  const redirectNavigete = useNavigate();

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    setIsSearching(true);
  };

  useEffect(() => {
    setIsSearching(true);
    console.log(filterValues);

    if (filterValues) {
      const queryString = `?mac=${filterValues.mac}&linux=${filterValues.lin}&win=${filterValues.win}&rating=${filterValues.rating}&price=${filterValues.price}`;
      // console.log(queryString);
      filterProducts(queryString);
    }
  }, [filterValues]);
  useEffect(() => {
    if (debouncedValue) {
      gamesFilter(debouncedValue);
    } else {
      setSearchResult(products);
      setIsSearching(false);
    }
  }, [debouncedValue]);
  const gamesFilter = async (str: string) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/search?value=${str}`
      );
      // console.log(str);

      // console.log(res.data);

      setSearchResult(res.data);
      setIsSearching(false);
    } catch (e) {
      console.error(e);
    }
  };

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products/all");

      setProducts(res.data);
      setSearchResult(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    console.log(search);
    if (search) {
      setQueryString(search);
      console.log(queryString);
      setIsSearching(true);
      filterProducts(queryString);
    } else {
      getProducts();
    }
  }, []);
  useEffect(() => {
    console.log(cart);
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart.length]);

  const filterProducts = async (queryString: string) => {
    try {
      // console.log(queryString);
      const res = await axios.get(
        `http://localhost:5000/api/filter?${queryString}`
      );
      console.log(res);
      const queryBack = res.data.message;
      redirectNavigete(`/products?${queryBack}`);
      setSearchResult(res.data.result);

      setTimeout(() => {
        setIsSearching(false);
      }, 400);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ProductPageWrapper>
      <ProductSearcWrapper>
        <SearchBar value={value} onChange={onChangeValue} />
        <div
          className="filters"
          // onClick={() => setIsFilterVisible(true)}

          onMouseEnter={() => setIsFilterVisible(!isFiltersVisible)}
          onMouseLeave={() => setIsFilterVisible(!isFiltersVisible)}
        >
          Filters
          {isFiltersVisible && (
            <DropdownFilter
              queryString={queryString}
              setQueryString={setQueryString}
              setFilterValues={setFilterValues}
            />
          )}
        </div>
      </ProductSearcWrapper>
      {isSearching ? (
        <span className="product-loader" />
      ) : (
        <ProductsWrapper>
          {searchResult.map((el) => (
            <ProductCard
              key={el.image}
              bg={el.image}
              style={{ backgroundImage: `url(${el.image})` }}
              onMouseEnter={() => {
                setAddToCart(true);
              }}
              // onMouseLeave={() => {
              //   setAddToCart(false);
              // }}
            >
              {addToCart && (
                <div key={Math.random() * 1000} className="addToCart-btn">
                  <FontAwesomeIcon
                    className="cart-plus-icon"
                    icon={faCartPlus}
                    onClick={(e) => {
                      e.preventDefault();

                      setCart([...cart, el]);
                    }}
                  />
                </div>
              )}
              <div className="product-info" style={{ color: el.color }}>
                <div className="product-title">{el.title}</div>
                <div className="product-rating-pricing">
                  <div className="product-rating">
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
            </ProductCard>
          ))}
        </ProductsWrapper>
      )}
    </ProductPageWrapper>
  );
};

export default Products;
