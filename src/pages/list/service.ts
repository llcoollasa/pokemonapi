import axios from "axios";
import { POKEMON_URL } from "../../configs";
import { PokeResult } from "./index";

export const getPokemonByParams = async (searchParams: string) => {
  return axios.get<PokeResult>(`${POKEMON_URL}${searchParams}`);
};
