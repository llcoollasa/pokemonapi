import React, { FC, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LoadingContext } from "../../context/loadingContext";
import { Pagination } from "../../components/pagination";
import { PokeResult, getPokemonByParams } from "./index";
import { Error } from "../../components/Error";
import { PAGINATION_LIMIT_RECORDS_PER_PAGE, POKEMON_LOGO } from "../../configs";
import { SearchPokemon } from "../../components/Search";

import "./list.css";

export const List: FC = () => {
  const navigate = useNavigate();
  const { isLoading } = useContext(LoadingContext);
  const [pokeList, setPokeList] = useState<PokeResult>();
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const [detailPage, setDetailPage] = useState("");

  useEffect(() => {
    isLoading(true);
    const serachParams = `?offset=0&limit=${PAGINATION_LIMIT_RECORDS_PER_PAGE}`;
    getPokemonByParams(serachParams)
      .then(({ data }) => {
        setPokeList(data);
        isLoading(false);
      })
      .catch((err) => {
        isLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    navigate(`/${detailPage}`);
  }, [detailPage]);

  const getPokeDexByIdCallback = async (
    searchParams: string,
    currentPage: number
  ) => {
    try {
      setCurrentPage(currentPage);
      isLoading(true);
      const { data } = await getPokemonByParams(searchParams);
      setPokeList(data);
      isLoading(false);
    } catch (error) {
      isLoading(false);
      setError(true);
    }
  };

  const searchByName = (id: string) => {
    // if (id) navigate(`/${id}`);
    if (id) setDetailPage(id);
  };

  if (error) {
    return (
      <div>
        <Error title="Error" message="Something went wrong">
          <Link to="/">Home</Link>
        </Error>
      </div>
    );
  }

  return (
    <div>
      <img src={POKEMON_LOGO} alt="The Pokémon API" />

      <h2>The Pokémon API</h2>

      <SearchPokemon getDataCallback={searchByName} />

      <div className="poke-list">
        {pokeList &&
          pokeList?.results.map((item, index) => (
            <Link
              key={index}
              to={`/${index + 1}`}
              className="pokemon-link poke-card"
            >
              <div>
                <div>{item.name.toUpperCase()}</div>
                <div className="more-details">More Details</div>
              </div>
            </Link>
          ))}
      </div>

      {pokeList && (
        <Pagination
          count={pokeList?.count}
          currentPage={currentPage}
          clickOnPageCallback={getPokeDexByIdCallback}
        />
      )}
    </div>
  );
};
