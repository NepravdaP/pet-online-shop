import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions";
import { LogInProps } from "./types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
const LogOut: FC<LogInProps> = ({ username }) => {
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(signOut());
  };
  return (
    <div className="logout">
      <Link to={ROUTES.USERPAGE} className="username">
        {username}
      </Link>
      <FontAwesomeIcon
        onClick={() => logOut()}
        className="cart-icon"
        icon={faArrowRightFromBracket}
      />
    </div>
  );
};

export default LogOut;
