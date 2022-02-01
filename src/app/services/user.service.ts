import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlMockApi = environment.urlUsersAPI;
  private urlLocalUserApi = environment.urlLocalLogin;
  private users: User[] = [];
  constructor(private httpClient : HttpClient) {}

  getUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>(`${this.urlLocalUserApi}`);
  }

  addUser(user : User): Observable<any>{
    return this.httpClient.post<User>(`${this.urlLocalUserApi}`,user);
  }

}
