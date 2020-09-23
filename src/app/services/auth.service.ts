import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Signup} from '../components/sign/up/model/signup';

const AUTH_API = 'http://localhost:9090/v1/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(credentials): Observable<any> {
    return this.http.post(AUTH_API + '/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  signUp(signup: Signup): Observable<any> {
    return this.http.post(AUTH_API + '/signup', {
      username: signup.username,
      email: signup.email,
      password: signup.password,
      roles: signup.roles
    }, httpOptions);
  }
}
