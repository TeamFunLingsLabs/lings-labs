import { combineReducers } from "redux";
import setApplication from "./setApplication";

import merchReducer from "./merchReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  merch: merchReducer,
  currentOrder: orderReducer,
  application: setApplication
});
