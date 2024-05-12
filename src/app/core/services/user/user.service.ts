import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUsersUrl: string = "Users";

  constructor(private httpClient: HttpClient) { }

  public getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(`${ environment.apiUrl }/${ this.getAllUsersUrl }`);
  }
}
