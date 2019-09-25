import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl + 'users', httpOptions);
  }

  getUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(this.baseUrl + 'users/' + id, httpOptions);
  }

  updateUser(id: number, user: UserModel) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }
}
