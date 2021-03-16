import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
})
export class NameInputComponent {
  constructor(private router: Router, private userService: UserService) {}
  name: string = '';
  placeholder: string = 'Please type in your name';
  onKey(event: any) {
    this.name = event.target.value;
  }

  onSubmit() {
    this.userService.setName(this.name);
    this.router.navigate(['/pokemon']);
  }
}
