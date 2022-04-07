import { CartState, State } from "./types";

export const getIsLoggedInSelector = (state: State) =>
  state.authReducer.isLoggedIn;

export const getCounter = (state: CartState) => state.cartReducer.cartCounter;
