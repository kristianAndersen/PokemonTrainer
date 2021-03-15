import { Component, OnInit } from '@angular/core';
import { PokemonData } from '../../model/PokemonModel';
import { PokemonApi } from '../../services/Service';


@Component({
  selector: 'pokemon-grid',
  templateUrl: 'Pokemon-Grid.component.html',
  styleUrls: ['Pokemon-Grid.component.css'],
})
export class PokemonGridComponent implements OnInit {
  pokemons: PokemonData[] = [];

  constructor(private pokemonService: PokemonApi) {}

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }
}
