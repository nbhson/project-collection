import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { UserDTO } from './user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserAPI {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private _http: HttpClient) {}

  getUsers(): Observable<UserDTO[]> {
    return this._http.get<UserDTO[]>('http://localhost:3000/users');
  }

  createUser(user: UserDTO): Observable<UserDTO> {
    return this._http.post<UserDTO>('http://localhost:3000/users', user, this.httpOptions);
  }

  updateUser(user: UserDTO): Observable<UserDTO> {
    return this._http.put<UserDTO>(`http://localhost:3000/users/${user.id}`, user, this.httpOptions);
  }

  deleteUser(id: string): any {
    return this._http.delete(`http://localhost:3000/users/${id}`);
  }
}
