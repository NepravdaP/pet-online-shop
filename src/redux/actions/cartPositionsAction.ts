import { INCREASE, DECREASE } from "./constants";

export const increase = () => {
  return {
    type: INCREASE,
  };
};
export const decrease = () => {
  return {
    type: DECREASE,
  };
};
