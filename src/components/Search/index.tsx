import React, { FC, useContext, useState } from "react";

import { LoadingContext } from "../../context/loadingContext";
import { getPokemonByName } from "./service";

import "./index.css";

// Move to interface.ts in case no of interfaces increases
interface SeachInput {
  getDataCallback: CallableFunction;
}

export const SearchPokemon: FC<SeachInput> = ({ getDataCallback }) => {
  const { isLoading } = useContext(LoadingContext);
  const [searchText, setSearchText] = useState("");

  const search = async () => {
    try {
      isLoading(true);
      const { data } = await getPokemonByName(searchText);
      isLoading(false);
      getDataCallback(data.id);
    } catch (error) {
      isLoading(false);
      // TODO handle error scenario
    }
  };

  return (
    <div className="search">
      <div>
        <input
          type="text"
          data-testid="searchText"
          placeholder="Enter full pokemon name"
          onInput={(evt) => {
            const target = evt.target as HTMLTextAreaElement;
            setSearchText(target.value);
          }}
        />
      </div>
      <div>
        <input
          data-testid="search"
          type="submit"
          onClick={async () => {
            if (searchText) search();
          }}
          value="Search"
        />
      </div> 
    </div>
  );
};
