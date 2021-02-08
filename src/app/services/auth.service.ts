import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Signup} from '../components/sign/up/model/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  contextUrl = 'http://localhost:9090/v1';
  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  options: any;

  constructor(private http: HttpClient) {
    this.options = {
      headers: this.httpHeaders
    };
  }

  signIn(credentials): Observable<any> {
    return this.http.post(this.contextUrl + '/auth/signin', {
      username: credentials.username,
      password: credentials.password
    }, this.options);
  }

  signUp(signup: Signup): Observable<any> {
    return this.http.post(this.contextUrl + '/auth/signup', {
      username: signup.username,
      email: signup.email,
      password: signup.password,
      roles: signup.roles
    }, this.options);
  }

  forgotPassword(userEmail: string): Observable<any> {
    return this.http.post(this.contextUrl + '/resetpassword/email', {
      email: userEmail,
    }, this.options);
  }

  newPassword(newUserPassword: string): Observable<any> {
    return this.http.post(this.contextUrl + '/resetpassword/newpassword', {
      newPassword: newUserPassword,
    }, this.options);
  }

  verifyPasswordResetToken(passwordResetToken: string): Observable<any>  {
    return this.http.post(this.contextUrl + '/resetpassword/token', {
      token: passwordResetToken,
    }, this.options);
  }

}
