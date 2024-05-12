import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/auth/login';
import { Register } from '../models/auth/register';
import { JwtAuth } from '../models/auth/jwtAuth';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl: string = "Auth/Register";
  loginUrl: string = "Auth/Login";


  constructor(private http: HttpClient) { }

  public register(user: Register): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${ environment.apiUrl }/${ this.registerUrl }`, user);
  }

  public login(user: Login): Observable<JwtAuth> {
    return this.http.post<JwtAuth>(`${ environment.apiUrl }/${ this.loginUrl }`, user);
  }
}
