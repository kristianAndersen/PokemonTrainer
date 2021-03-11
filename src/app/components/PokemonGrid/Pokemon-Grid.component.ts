import { Component, OnInit } from '@angular/core';
import { PokemonData } from '../../model/PokemonModel';
import { PokemonApi } from '../../services/Service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pokemon-grid',
  templateUrl: 'Pokemon-Grid.component.html',
  styleUrls: ['Pokemon-Grid.component.css'],
})
export class PokemonGridComponent implements OnInit {
  pokemons: PokemonData[] = [];
  
  constructor(private load: PokemonApi) {}



  ngOnInit() {
    for (let i: number = 1; i < 10; i++) {
      this.load.fetchPokemons(i).then((data) => {
        data.image = data.sprites.other.dream_world.front_default;
        data.colorstypes = data.types;
        data.typesLen = data.types;
        this.pokemons.push(data);
      });
    }
  }
}
