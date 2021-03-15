import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  private name: BehaviorSubject<string | null> = new BehaviorSubject(
    localStorage.getItem('name')
  );

  caughtPokemonIds: number[] = [];

  setName(name: string) {
    this.name.next(name);
    localStorage.setItem('name', name);
  }

  getName(): Observable<string | null> {
    return this.name.asObservable();
  }

  logOut() {
    localStorage.clear();
    this.name.next('');
  }
}
