import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PokemonData } from 'src/app/model/PokemonModel';

@Injectable()

@Component({
    selector: 'pokemon-card',
    templateUrl: './Pokemon-Card.component.html',
    styleUrls: ['./Pokemon-Card.component.css'],

})
export class PokemonCardComponent{
    
   

   

    
    @Input() pokemon:any;

  
    typeColor = function(arr:Array<any>,len:number) {
        const colours:any = {
            normal: '#A8A77A',
            fire: '#EE8130',
            water: '#6390F0',
            electric: '#F7D02C',
            grass: '#7AC74C',
            ice: '#96D9D6',
            fighting: '#C22E28',
            poison: '#A33EA1',
            ground: '#E2BF65',
            flying: '#A98FF3',
            psychic: '#F95587',
            bug: '#A6B91A',
            rock: '#B6A136',
            ghost: '#735797',
            dragon: '#6F35FC',
            dark: '#705746',
            steel: '#B7B7CE',
            fairy: '#D685AD',
        };
        if(len===2){

            return  "background:linear-gradient(to bottom," +colours[arr[0].type.name]+ 
            " 40%," +
            colours[arr[1].type.name]+
            " 100%)";
            
        }else{
            return "background:"+colours[arr[0].type.name]
        }
        
    };

}