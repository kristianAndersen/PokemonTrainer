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
    this.load.fetchArtists().then((data) => {
      data.sprite = data.sprites.other.dream_world.front_default;
      this.pokemons.push(data);
    });
  }

  /*
        ngOnInit(): void {
            this.load.getPokeData().subscribe(data => this.pokemondata = {
                abilities:(data as any).abilities,
                name:(data as any).name,
                height: (data as any).height,
                weight:(data as any).weight,
                moves:(data as any).moves,
                sprites:(data as any).sprites,
                base_experience:(data as any).base_experience,
                stats:(data as any).stats,
                types:(data as any).types
            });
          }
   */
}

/**  this.pokemonAPIService.getPokemonData().subscribe((data: PokeAPI[]) => {
          
        this.Pokemons = data; */
