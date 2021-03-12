import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonApi {
  private api: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}
  async fetchPokemons(i: number) {
    try {
      const data: any = await this.http.get(this.api + `${i}`).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }


}
