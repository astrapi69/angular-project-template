import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Signup} from '../components/sign/up/model/signup';
import {RestPathService} from './rest-path.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  options: any;

  constructor(private http: HttpClient,
              private restPathService: RestPathService) {
    this.options = {
      headers: this.httpHeaders
    };
  }

  signIn(credentials): Observable<any> {
    const url = this.restPathService.getSigninRestPath();
    return this.http.post(url, {
      username: credentials.username,
      password: credentials.password
    }, this.options);
  }

  signUp(signup: Signup): Observable<any> {
    const url = this.restPathService.getSignupRestPath();
    return this.http.post(url, {
      username: signup.username,
      email: signup.email,
      password: signup.password,
      roles: signup.roles
    }, this.options);
  }

  forgotPassword(userEmail: string): Observable<any> {
    const url = this.restPathService.getForgotPasswordRestPath();
    return this.http.post(url, {
      email: userEmail,
    }, this.options);
  }

  newPassword(newUserPassword: string): Observable<any> {
    const url = this.restPathService.getNewPasswordRestPath();
    return this.http.post(url, {
      newPassword: newUserPassword,
    }, this.options);
  }

  verifyPasswordResetToken(passwordResetToken: string): Observable<any>  {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const params = new URLSearchParams();
    params.append('token', passwordResetToken);
    const url = this.restPathService.getVerifyPasswordResetTokenPath();
    return this.http.get(url,  {headers: this.httpHeaders, params: params});
  }

}
