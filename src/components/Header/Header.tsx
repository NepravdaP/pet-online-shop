import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import { ROUTES } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SignInWrapper from "../SignIn";
import SignUpWrapper from "../SignUp";
import { useSelector } from "react-redux";
import { getIsLoggedInSelector } from "../../redux/selectors";

import LogOut from "../LogOut";

const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [username, setUsername] = useState("");

  const isLoggedIn = useSelector(getIsLoggedInSelector);

  const toggleSignIn = () => {
    setIsSignInVisible(!isSignInVisible);
  };
  const toggleSignUp = () => {
    setIsSignUpVisible(!isSignUpVisible);
  };

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
        <Link to={ROUTES.CART} className="route-link">
          <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
        </Link>
        {isLoggedIn ? (
          <LogOut username={username} />
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
        setUsername={setUsername}
      />
      <SignUpWrapper
        isSignUpVisible={isSignUpVisible}
        onBackdropClick={toggleSignUp}
        setUsername={setUsername}
      />
    </header>
  );
};

export default Header;
