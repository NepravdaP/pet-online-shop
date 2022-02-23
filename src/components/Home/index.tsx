import React, { FC, useState, useEffect } from "react";
import Slider from "../Slider/insdex";
import { HomeWrapper, SearchWrapper } from "./styled";
import "./style.css";
import SearchBar from "../SearchBar";
import DropdownSearch from "../DropdownSearch";

import { GamesItem } from "../DropdownSearch/types";
import useDebounce from "../../hooks/useDebounce";
import { games } from "../Slider/constants";
import axios from "axios";
const Home: FC = () => {
  const [searchResult, setSearchResult] = useState<GamesItem[]>([]);

  const [value, setValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const onChangeValue = (e: any) => {
    const { value } = e.target;
    setValue(value);
    setIsSearching(true);
  };
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    if (debouncedValue) {
      gamesFilter(debouncedValue);
    } else {
      setSearchResult([]);
      setIsSearching(false);
    }
  }, [debouncedValue]);
  const gamesFilter = async (str: string) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/search?value=${str}`
      );
      console.log(str);

      console.log(res.data);

      setSearchResult(res.data);
      setIsSearching(false);
    } catch (e) {
      console.error(e);
    }

    // const result: Array<GamesItem> =
    //   str === ""
    //     ? []
    //     : games.filter((item) => item.title.toLowerCase().includes(str));
    // setSearchResult(result);
    // setIsSearching(false);
  };

  return (
    <HomeWrapper>
      <SearchWrapper>
        <SearchBar value={value} onChange={onChangeValue} />
        <DropdownSearch isSearching={isSearching} searchResult={searchResult} />
      </SearchWrapper>
      <Slider />
    </HomeWrapper>
  );
};

export default Home;
