import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = { email: '', password: '' };
  showAlert = false;
  alertMsg = 'Please wait! We are log you in!';
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void { }

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! We are logging you in!';
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
      this.alertMsg = 'Success! You are now logged in.';
      this.alertColor = 'green';
    } catch (e) {
      console.error('Error:', e); // Log the error for debugging
      this.inSubmission = false;
      this.alertMsg = 'An unexpected error occurred. Please try again later.';
      this.alertColor = 'red';
    }
  }
}
