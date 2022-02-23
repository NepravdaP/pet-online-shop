import React, { FC } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const DropdownMenu: FC = () => {
  return (
    <div className="dropdown-menu">
      <div className="drop-triangle"></div>
      <div className="drop-block">
        <Link to="/products/pc" className="drop-link">
          PC
        </Link>
        <Link to="/products/ps" className="drop-link">
          PS
        </Link>
        <Link to="/products/xbox" className="drop-link">
          Xbox
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
