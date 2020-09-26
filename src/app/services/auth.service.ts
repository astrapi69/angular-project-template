import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Signup} from '../components/sign/up/model/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  contextUrl = 'http://localhost:9090/v1/auth';
  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  options: any;

  constructor(private http: HttpClient) {
    this.options = {
      headers: this.httpHeaders
    };
  }

  signIn(credentials): Observable<any> {
    return this.http.post(this.contextUrl + '/signin', {
      username: credentials.username,
      password: credentials.password
    }, this.options);
  }

  signUp(signup: Signup): Observable<any> {
    return this.http.post(this.contextUrl + '/signup', {
      username: signup.username,
      email: signup.email,
      password: signup.password,
      roles: signup.roles
    }, this.options);
  }

}
