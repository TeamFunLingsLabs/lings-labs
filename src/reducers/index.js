import { combineReducers } from "redux";
import merchReducer from "./merchReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  merch: merchReducer,
  currentOrder: orderReducer
});
