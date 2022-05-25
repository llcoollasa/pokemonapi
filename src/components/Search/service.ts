import axios from "axios";
import { POKEMON_URL } from "../../configs"; 
import { PokeDetail } from "../../pages/detail/interface";

export const getPokemonByName = async (pokemonName: string) => {
  return axios.get<PokeDetail>(`${POKEMON_URL}/${pokemonName}`);
};
