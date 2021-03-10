import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RestPathService} from '../rest/rest-path.service';
import {Observable} from 'rxjs';
import {newUrl} from '../rest/url-functions';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  options: any;

  constructor(private http: HttpClient,
              private restPathService: RestPathService) {
    this.options = {
      headers: this.httpHeaders
    };
  }

  member(): Observable<any>  {
    const url = newUrl(this.restPathService.getMemberRestPath());
    return this.http.get(url);
  }
}
