import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  backgroundImage = 'url(../../../assets/landing-page-bg.jpg)';

  constructor(private router: Router, private userService: UserService) {}

  // if a Pokemon trainer name alredy is in localStorage redirect to pokemon cataloug
  ngOnInit(): void {
    this.userService.getName().subscribe((name: string | null) => {
      if (name) {
        this.router.navigate(['/pokemon']);
      }
    });
  }
}
