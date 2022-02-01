import { Observable, of } from "rxjs";

export const CartServiceMock = {

  clearCart(): Observable<[]> {
    return of([]);
  }
}
