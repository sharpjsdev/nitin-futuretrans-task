// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {
    if (localStorage.getItem('userName')) {
      this.router.navigate(['/dashboard']);
    }
  }

  username: string = '';

  onLogin() {
    // Implement your login logic here
    if (!this.username || this.username == null || this.username == '') {
      alert('Please Enter Username!');
      return;
    }
    console.log('Username:', this.username);
    localStorage.setItem('userName', this.username);
    this.router.navigate(['/dashboard']);
  }
}
