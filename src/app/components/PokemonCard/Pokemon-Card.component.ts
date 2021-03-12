import { Component, EventEmitter, Input, OnInit, Output,OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { PokemonData } from 'src/app/model/PokemonModel';
import { TypeColorService } from '../../services/type-color.service';
import { TypeBadgeService } from '../../services/type-badge.service';
import {PokeDataService} from '../../services/poke-data.service'
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()

@Component({
    selector: 'pokemon-card',
    templateUrl: './Pokemon-Card.component.html',
    styleUrls: ['./Pokemon-Card.component.css'],

})
export class PokemonCardComponent implements OnInit, OnDestroy{
    
   
    badge: Array<string> = ['grass.svg', 'poison.svg'];
    color: string = '#FFFFFF';
    types: Array<string> = ['grass', 'poison'];
    
    message: Array<any>=[];
    subscription!: Subscription;
    
    @Input() pokemon:any;
    @Output() showMeThePokemon: EventEmitter<any> = new EventEmitter();



    constructor(private typeColorService: TypeColorService, 
        private typeBadgeService:TypeBadgeService,private router: Router, 
        private pokedata:PokeDataService ) {}

   

    ngOnInit(): void {
        this.subscription = this.pokedata.currentMessage.subscribe(message => this.message = message)


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

      ngOnDestroy() {
        this.subscription.unsubscribe();
      }
      
      onClick(num:Array<any>) {
         console.log("click on pokecard")
        //move to detail and pass id
        this.showMeThePokemon.emit(num);
        this.pokedata.changeMessage(num)
      //  this.router.navigateByUrl('/pokemon');
      }

}