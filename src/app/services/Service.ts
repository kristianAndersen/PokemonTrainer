
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonData } from '../model/PokemonModel';

@Injectable({
  providedIn: 'root',
})
export class PokemonApi {
  
  private api:string= 'https://pokeapi.co/api/v2/pokemon/';
  
constructor(private http: HttpClient) {}
async fetchPokemons(i:number) {
  try {
    const data: any = await this.http.get(this.api+`${i}`).toPromise();
    return data;
  } catch (error) {
    console.error(`Error occurred: ${error}`);
  }
}
}