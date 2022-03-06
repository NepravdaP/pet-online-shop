import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions";
import { DecodedObj } from "./types";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import jwt_decode from "jwt-decode";
const LogOut: FC = () => {
  const dispatch = useDispatch();
  const localToken: string | null = localStorage.getItem("token");

  const decodedToken: DecodedObj = jwt_decode(localToken ? localToken : "");

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(signOut());
  };
  return (
    <div className="logout">
      <Link to={ROUTES.USERPAGE} className="username">
        {decodedToken.username}
      </Link>
      <Link to={ROUTES.INITIAL} className="route-link">
        <FontAwesomeIcon
          onClick={() => logOut()}
          className="logout-icon"
          icon={faArrowRightFromBracket}
        />
      </Link>
    </div>
  );
};

export default LogOut;
