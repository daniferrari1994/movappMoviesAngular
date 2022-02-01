import { Observable, of } from "rxjs";
import { userToDisplay } from "../models/userdisplay.model";

export const LoginServiceMock = {


  validateCredentials(email: string, password: string): Observable<boolean> {
    return of(true);
  },

  getToken(): any {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heGltaWxpYW5vLnBpc3NvQGdtYWlsLmNvbSIsIm5vbWJyZSI6IkFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MjUyMjQyMH0.Is-m_v9xxx2zpRoxdgzSR9SOirGomUSsgHNTNEhQA9w"
  },

  isUserLoggedIn(): boolean {
    return true;
  },

  getUserInfo(): userToDisplay{
    return {
      "email": "daniferrari1994@gmail.com",
      "nombre": "Dan",
      "apellido": "Ferrari",
      "role": "admin",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1heGltaWxpYW5vLnBpc3NvQGdtYWlsLmNvbSIsIm5vbWJyZSI6IkFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0MjUyMjQyMH0.Is-m_v9xxx2zpRoxdgzSR9SOirGomUSsgHNTNEhQA9w"
    }
  },

    getUserName(): string {
      return "Pruebas Unitarias"
    },
}
