import React, { FC } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import { ROUTES } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SignInWrapper from "../SignIn";
import SignUpWrapper from "../SignUp";
import { useSelector } from "react-redux";
import { getCounter, getIsLoggedInSelector } from "../../redux/selectors";

import LogOut from "../LogOut";
import { HeaderProps } from "./types";
import { number } from "yup";

const Header: FC<HeaderProps> = ({
  isVisible,
  setIsVisible,
  isSignInVisible,
  isSignUpVisible,
  toggleSignIn,
  toggleSignUp,
}) => {
  const isLoggedIn = useSelector(getIsLoggedInSelector);
  const cartCounter = useSelector(getCounter);
  return (
    <header>
      <nav className="big-nav">
        <ul>
          <li className="nav-link">
            <Link to={ROUTES.INITIAL} className="route-link">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to={ROUTES.ABOUT} className="route-link">
              About
            </Link>
          </li>
          <li
            className="nav-link"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <Link to={ROUTES.PRODUCTS} className="route-link">
              Products
            </Link>
            {isVisible && <DropdownMenu />}
          </li>
        </ul>
      </nav>
      <h1 className="header-logo">
        <Link to={ROUTES.INITIAL} className="route-link">
          Logo
        </Link>
      </h1>

      <div className="header-sign">
        {cartCounter > 0 ? (
          <div className="cart-counter">{cartCounter}</div>
        ) : null}

        <Link to={ROUTES.CART} className="route-link">
          <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
        </Link>
        {isLoggedIn ? (
          <LogOut />
        ) : (
          <div className="login">
            <button className="sign-in" onClick={toggleSignIn}>
              <p className="route-link">Sign In</p>
            </button>
            <button className="sign-up" onClick={toggleSignUp}>
              <Link to={ROUTES.SIGNUP} className="route-link">
                Sign Up
              </Link>
            </button>
          </div>
        )}
      </div>
      <SignInWrapper
        isSignInVisible={isSignInVisible}
        onBackdropClick={toggleSignIn}
      />
      <SignUpWrapper
        isSignUpVisible={isSignUpVisible}
        onBackdropClick={toggleSignUp}
      />
    </header>
  );
};

export default Header;
