import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypeBadgeService {
  badge: { [unit: string]: string } = {
    normal: './assets/badges/icons/normal.svg',
    fire: './assets/badges/icons/fire.svg',
    water: './assets/badges/icons/water.svg',
    electric: './assets/badges/icons/electric.svg',
    grass: './assets/badges/icons/grass.svg',
    ice: './assets/badges/icons/ice.svg',
    fighting: './assets/badges/icons/fighting.svg',
    poison: './assets/badges/icons/poison.svg',
    ground: './assets/badges/icons/ground.svg',
    flying: './assets/badges/icons/flying.svg',
    psychic: './assets/badges/icons/psychic.svg',
    bug: './assets/badges/icons/bug.svg',
    rock: './assets/badges/icons/rock.svg',
    ghost: './assets/badges/icons/ghost.svg',
    dragon: './assets/badges/icons/dragon.svg',
    dark: './assets/badges/icons/dark.svg',
    steel: './assets/badges/icons/steel.svg',
    fairy: './assets/badges/icons/fairy.svg',
  };

  constructor() {}
  getBadgeFromTypes(types: Array<any>) {
    if (types.length === 2) {
      //   console.log([this.badge[types[0]], this.badge[types[1]]]);
      return [this.badge[types[0]], this.badge[types[1]]];
    } else {
      //   console.log('1');
      return [this.badge[types[0]]];
    }
  }

  /* getBadgeTypes(types: Array<any>){
       if (types.length === 2) {
   
         return  'url('+this.badge[types[0]]+'),url('+this.badge[types[1]]+')';
     
       } else {
           console.log("1")
           return  'url('+this.badge[types[0]]+')'
       }
     }
     */
}
