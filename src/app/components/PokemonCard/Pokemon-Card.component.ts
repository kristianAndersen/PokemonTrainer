import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokemonData } from 'src/app/model/PokemonModel';
import { TypeColorService } from '../../services/type-color.service';
import { TypeBadgeService } from '../../services/type-badge.service';

@Injectable()

@Component({
    selector: 'pokemon-card',
    templateUrl: './Pokemon-Card.component.html',
    styleUrls: ['./Pokemon-Card.component.css'],

})
export class PokemonCardComponent{
    
   
    badge: Array<string> = ['grass.svg', 'poison.svg'];
    color: string = '#FFFFFF';
    types: Array<string> = ['grass', 'poison'];

    
    @Input() pokemon:any;

    @Output() showMeThePokemon: EventEmitter<any> = new EventEmitter();

    onClick(num:Array<any>) {
      //move to detail and pass id
      this.showMeThePokemon.emit(num);
      console.log(num);
    }

    constructor(private typeColorService: TypeColorService, private typeBadgeService:TypeBadgeService ) {}

    ngOnInit(): void {
     
        if(this.pokemon.colorstypes.length===2){
            let col1=this.pokemon.colorstypes[0].type.name  
            let col2=this.pokemon.colorstypes[1].type.name 
            this.color = this.typeColorService.getColorFromTypes([col1,col2]);
            
            this.badge = this.typeBadgeService.getBadgeTypes([col1,col2])
        }else{
            let col1=this.pokemon.colorstypes[0].type.name  
            this.color = this.typeColorService.getColorFromTypes([col1]);
            
            this.badge = this.typeBadgeService.getBadgeTypes([col1])
        }
      }

}