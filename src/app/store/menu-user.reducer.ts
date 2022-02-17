import { createReducer, on } from '@ngrx/store';
import { userState } from './user-state.model';
import { userClear, userDiplay } from './menu-user.actions';

export const userInitialState: userState = { username: "", role: "" }


const _userReducer = createReducer(
  userInitialState,
  on(userDiplay, (state, { username, role }) => {
    return {
      ...state,
      username: username,
      role: role
    };
  }),

  on(userClear, () => ({
    ...userInitialState
  }))
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
