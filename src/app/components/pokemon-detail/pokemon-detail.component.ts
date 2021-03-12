import { Component, OnInit,OnDestroy } from '@angular/core';
import { TypeColorService } from '../../services/type-color.service';
import { ActivatedRoute } from '@angular/router';
import {PokeDataService} from '../../services/poke-data.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  
  constructor(private typeColorService: TypeColorService,private route: ActivatedRoute,  
    private pokedata:PokeDataService) {}

  public pokemondeatil: Array<any>=['hep'];
  
  message: Array<any>=[];
  subscription!: Subscription;

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
    this.subscription = this.pokedata.currentMessage.subscribe(message => this.message = message)
    console.log(this.subscription)
    this.color = this.typeColorService.getColorFromTypes(this.types);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
