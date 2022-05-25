import axios from "axios";
import { POKEMON_URL } from "../../configs";
import { PokeDetail } from "./interface";

export const getPokeDetail = async (id: string) => {
  return axios.get<PokeDetail>(`${POKEMON_URL}/${id}`);
};
