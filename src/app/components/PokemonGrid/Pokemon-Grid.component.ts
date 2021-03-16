import { Component, OnInit } from '@angular/core';
import { PokemonData } from '../../model/PokemonModel';
import { PokemonApi } from '../../services/Service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'pokemon-grid',
  templateUrl: 'Pokemon-Grid.component.html',
  styleUrls: ['Pokemon-Grid.component.css'],
})
export class PokemonGridComponent implements OnInit {
  pokemons: PokemonData[] = [];
  pokemonAmount: number = 101;

  constructor(
    private pokemonService: PokemonApi,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getTrainerMode().subscribe((tm) => {
      if (tm) {
        this.userService.getCaughtPokemon().subscribe((pokemons) => {
          this.pokemons = pokemons;
        });
      } else {
        this.pokemons = this.pokemonService.getPokemons(
          this.pokemonAmount,
          false
        );
      }
    });
  }
}
