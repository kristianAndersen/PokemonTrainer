import { Component, OnInit } from '@angular/core';
import { TypeColorService } from '../../services/type-color.service';
import { Router } from '@angular/router';
import { PokemonData } from '../../model/PokemonModel';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private typeColorService: TypeColorService,
    private router: Router
  ) {}

  pokemon = this.router.getCurrentNavigation()?.extras.state as PokemonData;
  // name: string = this.pokemon.name;
  // sprite: string = this.pokemon.image;

  // hp: number = 55;
  // attack: number = 49;
  // defense: number = 49;
  // specialAttack: number = 65;
  // specialDefense: number = 65;
  // speed: number = 45;
  // height: number = 7;
  // weight: number = 69;
  // moves: Array<string> = ['vine-whip', 'body-slam', 'tackle'];
  // abilities: Array<string> = ['overgrow', 'chlorophyll'];
  // baseExperience: number = 64;
  color: string = '#FFFFFF';

  ngOnInit(): void {
    this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
    console.log(this.pokemon);
  }
}
