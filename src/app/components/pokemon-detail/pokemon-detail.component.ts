import { Component, OnInit } from '@angular/core';
import { TypeColorService } from '../../services/type-color.service';
import { TypeBadgeService } from '../../services/type-badge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonData } from '../../model/PokemonModel';
import { PokemonApi } from '../../services/Service';
import { PokemonDetailService } from '../../services/Pokemon-Detail.service';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  // pokemonId: string = '0';

  constructor(
    private pokemonService: PokemonApi,
    private pokemonDetailService: PokemonDetailService,
    private typeColorService: TypeColorService,
    private typeBadgeService: TypeBadgeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  pokemonId = this.route.snapshot.paramMap.get('id') as string;
  pokemon = this.router.getCurrentNavigation()?.extras.state as PokemonData;
  // as PokemonData;

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
  badge: Array<String> = ['hep', 'pep'];

  
  ngOnInit(): void {

    if (this.pokemon === undefined) {

      this.pokemonDetailService.getPokemon(Number(this.pokemonId)).subscribe(
        pokemon => {this.pokemon =  pokemon;
          //quick bad fix
          this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
          this.badge = this.typeBadgeService.getBadgeFromTypes(this.pokemon.types);
        });


    }
      this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
      this.badge = this.typeBadgeService.getBadgeFromTypes(this.pokemon.types);
    }
  }



