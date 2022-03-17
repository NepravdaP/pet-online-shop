import React, { FC, useState, useEffect } from "react";
import { SearchWrapper } from "../Home/styled";
import SearchBar from "../SearchBar";
import { GamesItem } from "../Slider/types";
import axios from "axios";
import {
  ProductSearcWrapper,
  ProductPageWrapper,
  ProductsWrapper,
  ProductCard,
} from "./styled";

const Products: FC = () => {
  const [value, setValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const onChangeValue = (e: any) => {
    const { value } = e.target;
    setValue(value);
    setIsSearching(true);
  };
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

  return (
    <ProductPageWrapper>
      <ProductSearcWrapper>
        <SearchBar value={value} onChange={onChangeValue} />
      </ProductSearcWrapper>
      <ProductsWrapper>
        {products.map((el) => (
          <ProductCard key={el.image}>jopa</ProductCard>
        ))}
      </ProductsWrapper>
    </ProductPageWrapper>
  );
};

export default Products;
