import {HTTP_INTERCEPTORS, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { SessionStorageService } from '../services/storage/session-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private sessionStorageService: SessionStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authReq = request;
    const token = this.sessionStorageService.getUserToken();
    if (token != null) {
      const bearerToken = 'Bearer ' + token;
      const clonedHeaders = request.headers;
      const ch = clonedHeaders.append('Content-Type', 'application/json')
        .append('Authorization', bearerToken);
      authReq = request.clone({ headers: ch});
    }
    return next.handle(authReq);
  }
}
