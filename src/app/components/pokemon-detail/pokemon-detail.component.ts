import { Component, OnInit } from '@angular/core';
import { TypeColorService } from '../../services/type-color.service';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(private typeColorService: TypeColorService) {}

  //Mock
  name: string = 'Bulbasaur';
  sprite: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg';
  types: Array<string> = ['grass', 'poison'];
  hp: number = 45;
  attack: number = 49;
  defense: number = 49;
  specialAttack: number = 65;
  specialDefense: number = 65;
  speed: number = 45;
  height: number = 7;
  weight: number = 69;
  moves: Array<string> = ['vine-whip', 'body-slam', 'tackle'];
  abilities: Array<string> = ['overgrow', 'chlorophyll'];
  baseExperience: number = 64;
  color: string = '#FFFFFF';

  ngOnInit(): void {
    this.color = this.typeColorService.getColorFromTypes(this.types);
  }
}
