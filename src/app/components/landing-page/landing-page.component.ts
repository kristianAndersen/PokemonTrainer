import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  name = '';
  placeholder = 'Please type in your name';

  onKey(event: any) {
    // without type info
    this.name = event.target.value;
    console.log(this.name);
  }

  onSubmit() {
    localStorage.setItem('name', this.name);
  }

  constructor() {}

  ngOnInit(): void {}
}
