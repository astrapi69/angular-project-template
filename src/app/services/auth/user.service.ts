import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:9090/v1/jwt/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicArea(): Observable<any> {
    return this.http.get(API_URL + 'ispublic', { responseType: 'text' });
  }

  getMemberArea(): Observable<any> {
    return this.http.get(API_URL + 'member', { responseType: 'text' });
  }

}
