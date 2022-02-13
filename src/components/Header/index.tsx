import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
// import DropdownMenu from "../DropdownMenu";
// const [isVisible, setIsVisible] = useState(false);

const Header: FC = () => {
  return (
    <header>
      <h1 className="header-logo">Logo</h1>
      <nav>
        <ul>
          <li className="nav-link">
            <Link to="/" className="route-link">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/about" className="route-link">
              About
            </Link>
          </li>
          <li
            className="nav-link"
            // onMouseEnter={() => setIsVisible(true)}
            // onMouseLeave={() => setIsVisible(false)}
          >
            <Link to="/products" className="route-link">
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="header-cart">
        <Link to="/cart" className="route-link">
          Cart
        </Link>
      </h1>
      <div className="header-sign">
        <button className="sign-in">
          <Link to="/signin" className="route-link">
            Sign In
          </Link>
        </button>
        <button className="sign-up">
          {" "}
          <Link to="/signup" className="route-link">
            Sign Up
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
