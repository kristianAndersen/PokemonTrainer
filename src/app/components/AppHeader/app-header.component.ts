import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeaderComponent {
  constructor(private router: Router, private userService: UserService) {}
  name: string | null = null;
  trainerMode: boolean = false;

  logOut() {
    this.name = null;
    this.userService.logOut();
    this.router.navigate(['/']);
  }

  toggleTrainerMode() {
    this.userService.toggleTrainerMode(this.trainerMode);
    this.router.navigate(['/pokemon']);
  }

  ngOnInit(): void {
    this.userService.getName().subscribe((name: string | null) => {
      if (name) {
        this.name = name;
      }
    });
  }
}
