import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { distinct, distinctUntilChanged, Observable, ObservedValueOf, Subscription, tap } from 'rxjs';
import { MovieService } from 'src/app/features/movies/services/movie.service';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { CartState } from '../store/cart-store.model';
import { cartClear, cartDeleteMovie } from '../store/cart.actions';
import { cartStateSelector } from '../store/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartMovies: MovieAPI[] | any = [];
  urlPath: string = environment.urlPathImage

  movieList$!: Observable<CartState>
  status: string = "";

  constructor(

    private movieService: MovieService,
    private cartService: CartService,
    private router: Router,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.pipe(
      select(cartStateSelector),
      tap(data => {
        console.log("Respuesta desde API", data);
      })
    ).subscribe(data => {
      this.cartMovies = data.movies
      this.status = data.status

      switch (this.status) {

        case "Added": {
          Swal.fire("Agregado", "Se agrego una nueva pelicula", "success");
          break;
        }
        case "Deleted": {
          Swal.fire("Eliminado", "Se elimino la pelicula", "warning");
          break;
        }
        case "Clean": {
          break;
        }
        default: {
          Swal.fire("Denegado", "No se pudo realizar la operacion", "error");
          break;
        }
      }
    })
  }

  emptyCart() {
    this.store.dispatch(cartClear())
  }

  removeMovieFromCart(movie: MovieAPI) {
    this.store.dispatch(cartDeleteMovie({ movie: movie }))
  }

  goBack() {
    this.router.navigate(['cartelera']);
  }

  returnToDetailMovie(movie: MovieAPI) {
    this.router.navigate(['cartelera', movie.id]);
  }
}
