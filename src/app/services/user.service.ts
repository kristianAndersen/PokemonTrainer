import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { PokemonData } from '../model/PokemonModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    if (this.caughtPokemon.length === 0) {
      let string = localStorage.getItem('caughtPokemon');
      if (string != null) {
        this.caughtPokemon = JSON.parse(string);
      }
    }
  }

  private name: BehaviorSubject<string | null> = new BehaviorSubject(
    localStorage.getItem('name')
  );
  private caughtPokemon: PokemonData[] = [];
  private caughtPokemon$: Subject<Array<PokemonData>> = new Subject();
  trainerMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggleTrainerMode(on: boolean) {
    this.trainerMode.next(on);
  }

  getTrainerMode() {
    return this.trainerMode.asObservable();
  }

  catchPokemon(pokemon: PokemonData) {
    if (!this.checkIfCaught(pokemon)) {
      this.caughtPokemon.push(pokemon);
    }
    localStorage.setItem('caughtPokemon', JSON.stringify(this.caughtPokemon));
  }

  checkIfCaught(pokemon: PokemonData) {
    if (pokemon) {
      let isCaught = this.caughtPokemon.find(
        (poke: PokemonData) => poke.id === pokemon.id
      );
      if (isCaught) {
        return true;
      }
    }
    return false;
  }

  getCaughtPokemon() {
    this.caughtPokemon$ = new BehaviorSubject(this.caughtPokemon);
    return this.caughtPokemon$.asObservable();
  }

  setName(name: string) {
    this.name.next(name);
    localStorage.setItem('name', name);
  }

  getName(): Observable<string | null> {
    return this.name.asObservable();
  }

  isLoggedIn() {
    if (localStorage.getItem('name')) {
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.clear();
    this.name.next('');
  }
}
