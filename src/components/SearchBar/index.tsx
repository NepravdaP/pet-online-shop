import React, { FC } from "react";
import { SearchBarWrapper } from "./styled";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { PropsSearchBar } from "./types";

const SearchBar: FC<PropsSearchBar> = (props) => {
  return (
    <SearchBarWrapper>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        {...props}
      />
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
