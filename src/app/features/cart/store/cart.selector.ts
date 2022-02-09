import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../store/cart-store.model";
import { MovieAPI } from "src/app/models/movieAPI.model";

export const cartStateSelector = createFeatureSelector<CartState>('cart');

export const cartItemsSelector = createSelector (
    cartStateSelector,
    (state: CartState) => state
);
