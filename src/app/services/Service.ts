import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../model/PokemonModel';

@Injectable({
  providedIn: 'root',
})
export class PokemonApi {
  private api: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}
  pokemons: PokemonData[] = [];

  getPokemons(pokemonAmount: number, detail: boolean): PokemonData[] {
    if (this.pokemons.length === 0) {
      if (detail === true) {
        this.fetchPokemon(pokemonAmount);
      } else {
        for (let i = 1; i <= pokemonAmount; i++) {
          this.fetchPokemon(i);
        }
      }
    }
    return this.pokemons;
  }

  public fetchPokemon(id: number) {
    try {
      const data: any = this.http
        .get(this.api + `${id}`)
        .subscribe((res: any) => {
          res.image = res.sprites.other.dream_world.front_default;
          res.types = res.types.map((type: any) => {
            return type.type.name;
          });
          res.stats.forEach((data: any) => {
            if (data.stat.name === 'special-attack') {
              res.special_attack = data.base_stat;
            } else if (data.stat.name === 'special-defense') {
              res.special_defense = data.base_stat;
            } else {
              res[data.stat.name] = data.base_stat;
            }
          });
          res.abilities = res.abilities.map((ability: any) => {
            return ability.ability.name;
          });
          res.moves = res.moves.map((move: any) => {
            return move.move.name;
          });

          this.pokemons.push(res);
        });
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }
}
