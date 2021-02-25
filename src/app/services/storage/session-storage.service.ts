import { Injectable } from '@angular/core';

const AUTH_TOKEN_KEY = 'jwt-token';
const AUTH_USER_KEY = 'user-account';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public setUserToken(token: string) {
    window.sessionStorage.removeItem(AUTH_TOKEN_KEY);
    window.sessionStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  public getUserToken(): string {
    return sessionStorage.getItem(AUTH_TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(AUTH_USER_KEY);
    window.sessionStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(AUTH_USER_KEY));
  }
}
