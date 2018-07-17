import { combineReducers } from "redux";
import merchReducer from "./merchReducer";

export default combineReducers({
  merch: merchReducer
});
