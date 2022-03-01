import React, { FC } from "react";
import { DropElement, SearchDropDown } from "./styled";
import { Props } from "./types";
import "./style.css";
const DropdownSearch: FC<Props> = ({ searchResult, isSearching }) => {
  return (
    <SearchDropDown>
      {searchResult?.map((el) => (
        <DropElement key={Math.random() * 10000}>{el.title}</DropElement>
      ))}
      {isSearching && (
        <DropElement>
          <span className="loader" />
        </DropElement>
      )}
    </SearchDropDown>
  );
};

export default DropdownSearch;
