import { combineReducers } from "redux";
import setApplication from "./setApplication";

export default combineReducers({
  application: setApplication
});
