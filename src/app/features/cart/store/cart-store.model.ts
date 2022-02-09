import { MovieAPI } from "src/app/models/movieAPI.model";

export interface CartState {
    status: string,
    movies: MovieAPI[],
}
