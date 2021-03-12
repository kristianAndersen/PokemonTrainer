import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokemonData } from 'src/app/model/PokemonModel';
import { TypeColorService } from '../../services/type-color.service';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'pokemon-card',
  templateUrl: './Pokemon-Card.component.html',
  styleUrls: ['./Pokemon-Card.component.css'],
})
export class PokemonCardComponent {
  color: string = '#FFFFFF';
  types: Array<string> = ['grass', 'poison'];

  @Input() pokemon: any;

  @Output() showMeThePokemon: EventEmitter<any> = new EventEmitter();

  onClick(pokemon: PokemonData) {
    //move to detail and pass id
    this.showMeThePokemon.emit(pokemon);
    this.router.navigate(['/pokemon'], { state: pokemon });
  }

  constructor(
    private typeColorService: TypeColorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.pokemon.types.length === 2) {
      this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
    } else {
      this.color = this.typeColorService.getColorFromTypes(this.pokemon.types);
    }
  }
}
