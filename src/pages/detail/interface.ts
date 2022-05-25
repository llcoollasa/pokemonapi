interface Abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface NameURL {
  name: string;
  url: string;
}

interface GameIndices {
  game_index: number;
  version: NameURL[];
}

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: NameURL;
  version_group: NameURL;
}
interface Moves {
  move: NameURL;
  version_group_details: VersionGroupDetails[];
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: NameURL;
}

interface Types {
  slot: number;
  type: NameURL;
}

export interface PokeDetail {
  id: number;
  name: string;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  location_area_encounters: string;
  moves: Moves[];
  past_types: [];
  held_items: [];
  abilities: Abilities[];
  forms: NameURL[];
  game_indices: GameIndices[];
  species: NameURL;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
}
