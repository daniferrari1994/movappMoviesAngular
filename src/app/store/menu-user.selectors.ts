import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userState } from "./user-state.model";

export const userSelector = createFeatureSelector<userState>('user');

export const userDisplaySelector = createSelector(
  userSelector,
  (state: userState) => state
)
