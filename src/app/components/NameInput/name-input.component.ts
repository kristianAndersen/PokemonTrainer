import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
})
export class NameInputComponent {
  constructor(private router: Router) {}
  name: string = '';
  placeholder: string = 'Please type in your name';
  onKey(event: any) {
    this.name = event.target.value;
  }

  onSubmit() {
    localStorage.setItem('name', this.name);
    this.router.navigate(['/grid']);
  }
}
