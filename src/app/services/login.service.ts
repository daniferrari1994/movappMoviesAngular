import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user.model'
import jwt_decode from 'jwt-decode';
import { userToDisplay } from '../models/userdisplay.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [];
  private token: any = null;
  private email = '';
  private nombre = '';
  private apellido = '';
  private role ='';
  url = environment.urlLocalLogin


  constructor(
    private httpClient: HttpClient
  ) {

  }

  validateCredentials(email: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>(`${this.url}/validate`, {email,password})
      .pipe(
        map(response => {
          if (response.status === 'OK') {
              this.token = response.token;
              const decodedToken: any = jwt_decode(this.token);
              this.email = decodedToken?.email;
              this.nombre = decodedToken?.nombre;
              this.role = decodedToken?.role;
              this.apellido = decodedToken?.apellido;
            return true;
          } else {
              this.token = null;
            return false;
          }
        })
      )
  }

  getToken(): any {
    return this.token;
  }

  isUserLoggedIn():boolean {
    return this.email !== '';
  }

  getUserInfo(): userToDisplay {
    let user:userToDisplay ={
      email: this.email,
      apellido: this.apellido,
      nombre: this.nombre,
      role: this.role,
      token: this.token
    }

    return user;
  }
  getUserName(): string {
    return this.nombre
    }

  signOutUser():void{
    this.token = null;
    this.email = '';
    this.nombre = '';
    this.apellido = '';
    this.role ='';
  }
}
