// import { combineReducers, createStore } from "redux";
import authReducer from "./reducers";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartPositions";
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  authReducer,
  cartReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// const store = createStore(rootReducer, composeWithDevTools);

export default store;
