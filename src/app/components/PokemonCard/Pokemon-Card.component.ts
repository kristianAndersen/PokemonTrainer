import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokemonData } from 'src/app/model/PokemonModel';
import { TypeColorService } from '../../services/type-color.service';
import { TypeBadgeService } from '../../services/type-badge.service';
import { Router } from '@angular/router';


@Injectable()
@Component({
  selector: 'pokemon-card',
  templateUrl: './Pokemon-Card.component.html',
  styleUrls: ['./Pokemon-Card.component.css'],
})
export class PokemonCardComponent implements OnInit{

  id:number=0;  
  color: string = '#FFFFFF';
  types: Array<string> = ['grass', 'poison'];
  badge: Array<string> = ['grass', 'poison'];

  @Input() pokemon: any;

  @Output() showMeThePokemon: EventEmitter<any> = new EventEmitter();

  onClick(pokemon: PokemonData) {
     this.id = pokemon.id;
    // move to detail and pass id
     this.showMeThePokemon.emit(pokemon);
     this.router.navigate([`/pokemon/${this.id}`], { state: pokemon });

  }

  constructor(
    private typeColorService: TypeColorService,
    private typeBadgeService: TypeBadgeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.pokemon.types.length === 2) {
      this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
      this.badge = this.typeBadgeService.getBadgeFromTypes(this.pokemon.types);
    } else {
      this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
      this.badge = this.typeBadgeService.getBadgeFromTypes(this.pokemon.types);

    }
  }
}
