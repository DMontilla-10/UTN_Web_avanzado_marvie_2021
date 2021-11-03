// CASOS DE USO DE useReducer()
// 1) Manejo de estados complejos de un componente

import React, { useState, useReducer } from "react";

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { cuenta: state.cuenta + 1 };
    case ACTIONS.DECREMENT:
      return { cuenta: state.cuenta - 1 };
    default:
      return state;
  }
};

export const UseReducer = () => {
  // const [cuenta, setCuenta] = useState(0)
  const [estado, dispatch] = useReducer(reducer, { cuenta: 0 });

  const increment = () => {
    // setCuenta((prevCuenta) => prevCuenta + 1);
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    // setCuenta((prevCuenta) => prevCuenta - 1);
    dispatch({type: ACTIONS.DECREMENT})
  };

  return (
    <>
      <button onClick={decrement} style={{ fontSize: "15px" }}>
        -
      </button>
      <span>{estado.cuenta}</span>
      <button onClick={increment} style={{ fontSize: "15px" }}>
        +
      </button>
    </>
  );
};
