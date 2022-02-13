import React, { FC } from "react";
import { Link } from "react-router-dom";
const DropdownMenu: FC = () => {
  return (
    <div className="drop-down-menu">
      <div className="drop-triangle"></div>
      <div className="drop-block">
        <Link to="/products/pc">PC</Link>
        <Link to="/products/ps">PS</Link>
        <Link to="/products/xbox">Xbox</Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
