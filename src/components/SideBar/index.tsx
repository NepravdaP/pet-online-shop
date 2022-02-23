import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Props } from "./types";
import { SidebarWrapper } from "./styled";
import { links } from "./constants";

const SideBar: FC<Props> = ({ isOpen }) => {
  return (
    // <div className={isOpen ? "sidebar opened" : "sidebar closed"}>
    <SidebarWrapper isOpen={isOpen}>
      {isOpen && (
        <>
          <nav className="side-nav ">
            <ul className="menu-list">
              {links.map((el) => (
                <li key={el.title} className="menu-link">
                  <Link to={el.route} className="route-link">
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="cart">
            <Link to={ROUTES.CART} className="route-link">
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
            </Link>
          </div>
          <div className="sign-block">
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
        </>
      )}
    </SidebarWrapper>
    // </div>
  );
};

export default SideBar;
