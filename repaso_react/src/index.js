import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createStore } from "redux";
import { todosLosReducers } from "./reducers";
import { Provider } from "react-redux";

// Redux
const store = createStore(todosLosReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// STORE

// ACTIONS

// REDUCERS

// DISPATCH
