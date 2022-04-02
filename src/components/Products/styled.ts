import styled from "styled-components";
import { GamesItem } from "../Slider/types";
import { ProductCardProps, ProductWraperProps } from "./types";

export const ProductPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProductSearcWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%, 0);
  margin: 50px auto;
  z-index: 1000000;
`;
export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2%;
  padding-top: 120px;
  padding-bottom: 30px;
`;
export const ProductCard = styled.div<ProductCardProps>`
  width: 350px;
  height: 300px;
  margin: auto;
  margin-top: 30px;
  background-position: center;
  background-size: cover;
  position: relative;
`;
export const DropdownFilterWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
  background-color: #6f2232;
  border: 2px solid #4e4e50;
  left: 0;
  top: 0;
`;
