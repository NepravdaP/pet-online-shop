import React, { FC, useState } from "react";
import Slider from "../Slider/insdex";
import { HomeWrapper, SearchWrapper } from "./styled";
import "./style.css";
import SearchBar from "../SearchBar";
import DropdownSearch from "../DropdownSearch/insex";
import { games } from "../Slider/constants";
import { EnumGamesItem } from "../DropdownSearch/types";
const Home: FC = () => {
  const initSearchresult: Array<EnumGamesItem> = [];
  const [searchResult, setSearchResult] = useState(initSearchresult);
  const [value, setValue] = useState("");

  const onChangeValue = (e: any) => {
    const { value, name } = e.target;
    setValue(value);

    gamesFilter(value);
  };
  const gamesFilter = (str: string) => {
    const result: Array<EnumGamesItem> =
      str === ""
        ? []
        : games.filter((item) => item.title.toLowerCase().includes(str));
    setSearchResult(result);
  };

  return (
    <HomeWrapper>
      <SearchWrapper>
        <SearchBar value={value} onChange={onChangeValue} />
        <DropdownSearch searchResult={searchResult} />
      </SearchWrapper>
      <Slider />
    </HomeWrapper>
  );
};

export default Home;
