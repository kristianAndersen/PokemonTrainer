import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PokemonDetailService {
  private api = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<any> {
    return this.http.get<any>(this.api + id).pipe(
      map((res) => {
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

        return res;
      })
    );
  }
}
