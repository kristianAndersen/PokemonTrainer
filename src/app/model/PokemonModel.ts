export interface PokemonData {
  abilities: Array<string>;
  name: string;
  height: number;
  weight: number;
  moves: Array<string>;
  image: string;
  base_experience: number;
  stats: Stats;
  types: Array<string>;
  id: number;
}

interface Stats {
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}
