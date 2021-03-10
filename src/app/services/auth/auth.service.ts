import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Signup} from '../../components/sign/up/model/signup';
import {RestPathService} from '../rest/rest-path.service';
import {newUrl} from '../rest/url-functions';

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
    const pathParams: Map<string, string> = new Map();
    pathParams.set('token', passwordResetToken);
    const url = newUrl(this.restPathService.getVerifyPasswordResetTokenPath(), pathParams);
    return this.http.get(url);
  }

}
