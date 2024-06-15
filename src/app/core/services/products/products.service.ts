import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../../../models/product/productModel';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl: string = 'Products';

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductModel[]> {
    let result = this.http.get<ProductModel[]>(`${ environment.apiUrl }/${ this.productsUrl }`).pipe(
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
