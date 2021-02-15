import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Signup} from '../components/sign/up/model/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  contextUrl = 'http://localhost:9090/v1';
  authMainPath = '/auth';
  resetPasswordMainPath = '/resetpassword';
  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  options: any;

  constructor(private http: HttpClient) {
    this.options = {
      headers: this.httpHeaders
    };
  }

  signIn(credentials): Observable<any> {
    return this.http.post(this.contextUrl + this.authMainPath + '/signin', {
      username: credentials.username,
      password: credentials.password
    }, this.options);
  }

  signUp(signup: Signup): Observable<any> {
    return this.http.post(this.contextUrl + this.authMainPath + '/signup', {
      username: signup.username,
      email: signup.email,
      password: signup.password,
      roles: signup.roles
    }, this.options);
  }

  forgotPassword(userEmail: string): Observable<any> {
    return this.http.post(this.contextUrl + this.resetPasswordMainPath + '/email', {
      email: userEmail,
    }, this.options);
  }

  newPassword(newUserPassword: string): Observable<any> {
    return this.http.post(this.contextUrl + this.resetPasswordMainPath + '/newpassword', {
      newPassword: newUserPassword,
    }, this.options);
  }

  verifyPasswordResetToken(passwordResetToken: string): Observable<any>  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const params = new URLSearchParams();
    params.append('token', passwordResetToken);
    const url = this.contextUrl + this.resetPasswordMainPath + '/token';
    return this.http.get(url,  {headers: this.httpHeaders, params: params});
  }

}
