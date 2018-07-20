import { combineReducers } from "redux";
import setApplication from "./setApplication";
import applicants from "./applicants";

import merchReducer from "./merchReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  merch: merchReducer,
  currentOrder: orderReducer,
  application: setApplication,
  applicants: applicants
});
