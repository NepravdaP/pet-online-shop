import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Props, SidebarProps } from "./types";
import { SidebarWrapper } from "./styled";
import { links } from "./constants";

const SideBar: FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  toggleSignIn,
  toggleSignUp,
}) => {
  return (
    // <div className={isOpen ? "sidebar opened" : "sidebar closed"}>
    <SidebarWrapper isOpen={isOpen}>
      {isOpen && (
        <>
          <FontAwesomeIcon
            className="x-icon"
            icon={faXmark}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <nav className="side-nav ">
            <ul className="menu-list">
              {links.map((el) => (
                <li key={el.title} className="menu-link">
                  <Link
                    to={el.route}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                    className="route-link"
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="cart">
            <Link
              to={ROUTES.CART}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="route-link"
            >
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
            </Link>
          </div>
          <div className="sign-block">
            <button className="sign-in" onClick={toggleSignIn}>
              <Link
                to={ROUTES.SIGNIN}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="route-link"
              >
                Sign In
              </Link>
            </button>
            <button className="sign-up" onClick={toggleSignUp}>
              <Link
                to={ROUTES.SIGNUP}
                onClick={() => {
                  setIsOpen(!isOpen);
                  toggleSignUp;
                }}
                className="route-link"
              >
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
