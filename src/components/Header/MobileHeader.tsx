import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SignInWrapper from "../SignIn";
import SignUpWrapper from "../SignUp";
import SideBar from "../SideBar";
import { MobileHeaderProps } from "./types";
import { useSelector } from "react-redux";
import { getIsLoggedInSelector } from "../../redux/selectors";
import LogOut from "../LogOut";

const MobileHeader: FC<MobileHeaderProps> = ({
  toggleSignIn,
  toggleSignUp,
  isSignInVisible,
  isSignUpVisible,
  setUsername,
  username,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector(getIsLoggedInSelector);
  //   const sidebarHandler = () => {
  //     isOpen ? setIsOpen(false) : setIsOpen(false);
  //   };

  return (
    <header>
      <SideBar
        toggleSignIn={toggleSignIn}
        toggleSignUp={toggleSignUp}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div
        className="menu-bars"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <FontAwesomeIcon className="bar-icon" icon={faXmark} />
        ) : (
          <FontAwesomeIcon className="bar-icon" icon={faBars} />
        )}
      </div>
      <h1 className="header-logo">
        <Link to={ROUTES.INITIAL} className="route-link">
          Logo
        </Link>
      </h1>
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
    </header>
  );
};

export default MobileHeader;
