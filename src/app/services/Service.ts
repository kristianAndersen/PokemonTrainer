import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonData } from '../model/PokemonModel';

@Injectable({
  providedIn: 'root',
})
export class PokemonApi {
  private api: string = 'https://pokeapi.co/api/v2/pokemon/1';

  constructor(private http: HttpClient) {}
  async fetchArtists() {
    try {
      const data: any = await this.http.get(this.api).toPromise();
      console.log(data);
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }
}
