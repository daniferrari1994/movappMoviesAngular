import { Injectable } from "@angular/core"
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { MovieAPI } from "src/app/models/movieAPI.model";
import { CartService } from "src/app/services/cart.service";
import { cartAddMovie, cartClear, cartDeleteMovie, cartSetContent } from "./cart.actions";

@Injectable()

export class CartEffects {

  constructor(

    private actions: Actions,
    private cartService: CartService,
    private router: Router
  ) { }

  cartAddItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartAddMovie),
      switchMap(action => this.cartService.addMovie(action.movie)),
      map(data => cartSetContent({ status: data.status, movies: data.cartContent as MovieAPI[] })),
      tap(() => this.router.navigate(['carrito']))
    )
  );

  cartDeleteItem$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartDeleteMovie),
      switchMap(action => this.cartService.removeMovie(action.movie)),
      map(data => cartSetContent({ status: data.status, movies: data.cartContent as MovieAPI[] })),
    )
  );

  cartClean$ = createEffect(() =>
    this.actions.pipe(
      ofType(cartClear),
      switchMap(action => this.cartService.clearCart()),
      map(data => cartSetContent({ status: "CLEAN", movies: [] as MovieAPI[] })),
    )
  );
}
