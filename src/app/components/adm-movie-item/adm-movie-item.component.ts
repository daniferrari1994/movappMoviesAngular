import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieAPI } from 'src/app/models/movieAPI.model';

@Component({
  selector: 'app-adm-movie-item',
  templateUrl: './adm-movie-item.component.html',
  styleUrls: ['./adm-movie-item.component.scss']
})
export class AdmMovieItemComponent implements OnInit {
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  @Input() index: number | any;
  @Input() movie: MovieAPI | any
  @Output() selected = new EventEmitter<MovieAPI>();


  constructor() { }

  ngOnInit(): void { }

}
