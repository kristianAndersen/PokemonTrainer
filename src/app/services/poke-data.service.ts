import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class PokeDataService {

  private messageSource = new BehaviorSubject(['hep']);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message:Array<any>) {
     console.log(message)
    this.messageSource.next(message)
  }

}