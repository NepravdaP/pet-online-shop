import { type } from "os";

export type TypeAction = { type: string };
export type State = { authReducer: { isLoggedIn: boolean } };

export type CartState = { cartReducer: { cartCounter: number } };
