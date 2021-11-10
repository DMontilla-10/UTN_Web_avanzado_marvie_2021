import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(allReducers);

// STORE -> Donde se almacena la informacion

// ACTIONS -> Funciones
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   }
// }

// REDUCERS -> Son los encargados de modificar el estado
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state
//   }
// };

// let store = createStore(counter)

// store.subscribe(()=> console.log(store.getState()))

// DISPATCH -> Dispara la action
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
