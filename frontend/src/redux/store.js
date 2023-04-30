import { combineReducers, legacy_createStore } from "redux";
// import reducer from "./reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as CartReducer } from "./Cart/reducer";
import { reducer as ProductReducer } from "./Products/reducer";
import { reducer as UserReducer} from "./Users/reducer"; 
import {reducer as AdminReducer} from "./Admin/reducer"

const rootReducer = combineReducers({
  CartReducer,
  ProductReducer,
  UserReducer,
  AdminReducer
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
