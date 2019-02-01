import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import promise from 'redux-promise'
import thunk from 'redux-thunk'
const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

export default createStore(reducers, initialState, applyMiddleware(promise, thunk));
