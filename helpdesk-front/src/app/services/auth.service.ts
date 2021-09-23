import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/credentiais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais): Observable<HttpResponse<string>> {
    return this.http.post(`${ API_CONFIG.baseUrl }/login`, creds, {
      observe: 'response',
      responseType: 'text'
    });
  }

  successFullLogin(authToken: string): void {
    localStorage.setItem('token', authToken);
  }

  isAuthenticate(): boolean {
    const  token = localStorage.getItem('token');

    if (token !== null) {
      return !this.jwtService.isTokenExpired(token);
    }

    return false;
  }

  logout(): void {
    localStorage.clear();
  }
}
