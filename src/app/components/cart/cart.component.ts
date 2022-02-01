import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/features/movies/services/movie.service';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy, AfterViewInit {

  cartMovies: MovieAPI[]|any = [];
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  precio :number= 100;
  constructor(

    private movieService : MovieService,
    private cartService : CartService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(response => this.cartMovies = response);
    console.log("Cart Init - Status OK");
  }
  ngAfterViewInit(): void {
    console.log("Cart After View Init - Status OK");
  }
  ngOnDestroy(): void {
    console.log("Cart On Destroy - Status OK");
  }

  emptyCart(){
    this.cartService.clearCart().subscribe(response =>{
      console.log(response);
      this.cartService.getCart().subscribe(response => this.cartMovies = response);
    });

  }

  removeMovieFromCart(movie : MovieAPI){
    this.cartService.removeMovie(movie).subscribe(response => {
      console.log(response);
      if (response.status !== 'Status OK'){
        alert ("No es posible eliminar la pelicula")
      }else{
        this.cartService.getCart().subscribe(response => this.cartMovies = response);
      }
    });

  }

  goBack(){
    this.router.navigate(['cartelera']);
  }

  returnToDetailMovie(movie: MovieAPI){
    this.router.navigate(['cartelera', movie.id]);

  }
}

