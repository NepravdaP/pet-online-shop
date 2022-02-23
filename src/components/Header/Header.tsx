import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
import { ROUTES } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

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

        <button className="sign-in">
          <Link to={ROUTES.SIGNIN} className="route-link">
            Sign In
          </Link>
        </button>
        <button className="sign-up">
          <Link to={ROUTES.SIGNUP} className="route-link">
            Sign Up
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
