import { SIGN_IN, SIGN_OUT } from "../actions/constants";
import { initialState } from "../initialState";
import { TypeAction } from "../types";

const authReducer = (state = initialState, action: TypeAction) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isLoggedIn: true };
    case SIGN_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
