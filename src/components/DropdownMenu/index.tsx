import React, { FC } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const DropdownMenu: FC = () => {
  return (
    <div className="dropdown-menu">
      <div className="drop-triangle"></div>
      <div className="drop-block">
        <Link to="/products/pc" className="drop-link">
          Win
        </Link>
        <Link to="/products/ps" className="drop-link">
          Mac
        </Link>
        <Link to="/products/xbox" className="drop-link">
          Linux
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
