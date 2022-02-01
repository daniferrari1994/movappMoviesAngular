import { Observable, of } from "rxjs";
import { User } from "../models/user.model";

export const UserServiceMock = {

  getUsers(): Observable<User[]> {
      return of (
        [
          {
            "id":1,
            "nombre":"Dan",
            "apellido":"Ferrari",
            "direccion":"Calle falsa 123",
            "movil":"+54 1234567890",
            "email":"daniferrari1994@gmail.com",
            "password":"Ferrari1994",
            "role":"admin"
          },
          {
            "id":2,
            "nombre":"User",
            "apellido":"user",
            "direccion":"Calle Falsa 321",
            "movil":"+54 3434343434",
            "email":"user@user.com",
            "password":"34343434",
            "role":"user"
          }
      ])
    },

   addUser(user: User): Observable<any> {
      return of(true)
    }
}
