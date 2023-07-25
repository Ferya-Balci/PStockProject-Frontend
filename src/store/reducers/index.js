import { combineReducers } from "redux";

import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer";
const rootReducer = combineReducers({
  
  productListReducer,
  cartReducer,
  saveProductReducer,
});

export default rootReducer;
