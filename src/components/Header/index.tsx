import React, { FC } from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

import "./style.css";

const HeaderContainer: FC = () => {
  const screenWidth = window.screen.width;

  return screenWidth < 700 ? <MobileHeader /> : <Header />;
};

export default HeaderContainer;
