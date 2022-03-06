import React, { FC, useState } from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

import "./style.css";

const HeaderContainer: FC = () => {
  const screenWidth = window.screen.width;

  const [isVisible, setIsVisible] = useState(false);
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const toggleSignIn = () => {
    setIsSignInVisible(!isSignInVisible);
  };
  const toggleSignUp = () => {
    setIsSignUpVisible(!isSignUpVisible);
  };

  return screenWidth < 700 ? (
    <MobileHeader
      toggleSignIn={toggleSignIn}
      toggleSignUp={toggleSignUp}
      isSignInVisible={isSignInVisible}
      isSignUpVisible={isSignUpVisible}
    />
  ) : (
    <Header
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      isSignInVisible={isSignInVisible}
      isSignUpVisible={isSignUpVisible}
      setIsSignInVisible={setIsSignInVisible}
      setIsSignUpVisible={setIsSignUpVisible}
      toggleSignIn={toggleSignIn}
      toggleSignUp={toggleSignUp}
    />
  );
};

export default HeaderContainer;
