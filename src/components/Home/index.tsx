import React, { FC } from "react";
import Slider from "../Slider/insdex";
import { HomeWrapper } from "./styled";
import "./style.css";
const Home: FC = () => {
  return (
    <HomeWrapper>
      <h1 className="home-header">Home </h1>
      {/* <div style={{ position: "relative", display: "flex" }}> */}
      <Slider />
      {/* </div> */}
    </HomeWrapper>
  );
};

export default Home;
