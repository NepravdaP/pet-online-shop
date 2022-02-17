import React from "react";
import { SearchWrapper } from "./styled";
import "./style.css";
const SearchBar = () => {
  return (
    <SearchWrapper>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      ></input>
    </SearchWrapper>
  );
};

export default SearchBar;
