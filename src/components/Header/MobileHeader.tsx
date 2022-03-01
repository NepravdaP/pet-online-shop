import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import SideBar from "../SideBar";

const MobileHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   const sidebarHandler = () => {
  //     isOpen ? setIsOpen(false) : setIsOpen(false);
  //   };

  return (
    <header>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
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
    </header>
  );
};

export default MobileHeader;
