import { legacy_createStore } from "redux";
import reducer from "./reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = legacy_createStore(reducer, applyMiddleware(thunk));

export { store };
