import { initialState } from "./initialState";
import { State } from "./types";

export const getIsLoggedInSelector = (state: State) =>
  state.authReducer.isLoggedIn;
