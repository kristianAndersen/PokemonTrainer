import { Component, Input, OnInit } from '@angular/core';
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



  constructor(
    private pokemonDetailService: PokemonDetailService,
    private typeColorService: TypeColorService,
    private typeBadgeService: TypeBadgeService,
    private router: Router,
    private route: ActivatedRoute) { }

  pokemon = this.router.getCurrentNavigation()?.extras.state as PokemonData;
  pokemonId = this.route.snapshot.paramMap.get('id') as string;

  badge: Array<String> = ['hep', 'pep'];
  color: string = '#FFFFFF';

  ngOnInit(): void {

    if (this.pokemon === undefined) {
      this.pokemonDetailService.getPokemon(Number(this.pokemonId)).subscribe(
        pokemon => {
          this.pokemon = pokemon;
          // quick fix
          this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
          this.badge = this.typeBadgeService.getBadgeFromTypes(this.pokemon.types);
        });

    }else{
      this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
      this.badge = this.typeBadgeService.getBadgeFromTypes(this.pokemon.types);
    }
  }
}



