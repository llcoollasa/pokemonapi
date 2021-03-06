interface PokemonItem {
  name: string;
  url: string;
}

export interface PokeResult {
  count: number;
  next: string;
  previous: string;
  results: PokemonItem[];
}
