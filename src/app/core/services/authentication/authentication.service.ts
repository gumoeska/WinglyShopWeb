import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../../../models/auth/login';
import { Register } from '../../../models/auth/register';
import { JwtAuth } from '../../../models/auth/jwtAuth';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

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

    let result = this.http.post<JwtAuth>(`${ environment.apiUrl }/${ this.loginUrl }`, user).pipe(
      catchError(this.handleError)
    );

    return result;
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Erro no lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro no lado do servidor
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
      if (error.status === 400) {
        errorMessage = `${error.error.message}`;
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
