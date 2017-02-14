import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Router from "./router.js";

// render the main component
window._store = store;
ReactDOM.render(
  <Provider store={store}>
    {Router(store)}
  </Provider>,
  document.getElementById('app')
);
