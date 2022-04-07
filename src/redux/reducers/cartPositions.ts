import { INCREASE, DECREASE } from "../actions/constants";
import { initialCounterState } from "../initialState";
import { TypeAction } from "../types";

const cartReducer = (state = initialCounterState, action: TypeAction) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, cartCounter: ++state.cartCounter };

    case DECREASE:
      return { ...state, cartCounter: --state.cartCounter };
    default:
      return state;
  }
};

export default cartReducer;
