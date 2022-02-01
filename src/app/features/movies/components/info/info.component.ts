import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})

export class InfoComponent implements OnInit, OnDestroy, AfterViewInit {

  movie: MovieAPI | any;
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  popularidad_full_star : number[] =[];
  popularidad_half_star : number[] =[];
  fullStar:number =0;
  halfStar:number =0;

  constructor(
    private activateRoute: ActivatedRoute,
    private moviesService: MovieService,
    private cartService : CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    console.log("Info On Init - Status OK");

    this.moviesService.getDetailAPI(this.activateRoute.snapshot.params['id'])
    .subscribe(respose => {this.movie = respose
   });
  }

  ngAfterViewInit(): void {
    console.log("Info After View Init - Status OK");
  }

  ngOnDestroy(): void {
    console.log("Info On Destroy - Status OK");
  }

  addMovie(movie: MovieAPI){

    this.cartService.addMovie(movie).subscribe(response =>{

      console.log(response);
      if (response.status !== 'OK'){
        Swal.fire("No se agrego la pelicula", "La pelicula seleccionada, ya existe en el carrito", "error");
      }else{
        Swal.fire("Nueva pelicula agregada", "Agregado con exito", "success");
        this.router.navigate(['carrito']);
      }
    });
  }

  returnToMovies(){
    this.router.navigate(['cartelera']);
  }
}
