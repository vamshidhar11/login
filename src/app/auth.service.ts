import { AuthData } from './auth-data.model';
import { AuthLogin } from './auth-login-data.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string;
  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  createUser(username: string, email: string, password: string) {
    const authData: AuthData = {
      username: username,
      email: email,
      password: password
    };
    this.http
      .post('http://localhost:3000/api/user/signup', authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const authLogin: AuthLogin = { email: email, password: password };
    this.http
      .post<{ token: string }>(
        'http://localhost:3000/api/user/login',
        authLogin
      )
      .subscribe(response => {
        console.log(response);
        const token = response.token;
        this.token = token;
        if (token) {
          this.router.navigate(['/home-page']);
        }
      });
  }
}
