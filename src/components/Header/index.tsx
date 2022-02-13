import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DropdownMenu from "../DropdownMenu";
import { ROUTES } from "../../routes";
const Header: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header>
      <h1 className="header-logo">Logo</h1>
      <nav>
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
      <h1 className="header-cart">
        <Link to={ROUTES.CART} className="route-link">
          Cart
        </Link>
      </h1>
      <div className="header-sign">
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
