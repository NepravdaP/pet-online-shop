import React, { FC } from "react";
import { DropElement, SearchDropDown } from "./styled";
import { Props } from "./types";

const DropdownSearch: FC<Props> = ({ searchResult }) => {
  return (
    <SearchDropDown>
      {searchResult?.map((el) => (
        <DropElement key={Math.random() * 10000}>{el.title}</DropElement>
      ))}
      {/* <DropElement>Battlefield 2042</DropElement> */}
    </SearchDropDown>
  );
};

export default DropdownSearch;
