// CASOS DE USO DE useReducer()
// 1) Manejo de estados complejos de un componente

// import React, { useState, useReducer } from "react";

// const ACTIONS = {
//     INCREMENT: 'increment',
//     DECREMENT: 'decrement'
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { cuenta: state.cuenta + 1 };
//     case ACTIONS.DECREMENT:
//       return { cuenta: state.cuenta - 1 };
//     default:
//       return state;
//   }
// };

// export const UseReducer = () => {
//   // const [cuenta, setCuenta] = useState(0)
//   const [estado, dispatch] = useReducer(reducer, { cuenta: 0 });

//   const increment = () => {
//     // setCuenta((prevCuenta) => prevCuenta + 1);
//     dispatch({ type: ACTIONS.INCREMENT });
//   };

//   const decrement = () => {
//     // setCuenta((prevCuenta) => prevCuenta - 1);
//     dispatch({type: ACTIONS.DECREMENT})
//   };

//   return (
//     <>
//       <button onClick={decrement} style={{ fontSize: "15px" }}>
//         -
//       </button>
//       <span>{estado.cuenta}</span>
//       <button onClick={increment} style={{ fontSize: "15px" }}>
//         +
//       </button>
//     </>
//   );
// };

import React, { useReducer, useRef } from "react";
import { TodoList } from "../components/TodoList";
import { v4 as uuidv4 } from "uuid";

console.log(uuidv4())

const reducer = (initialState, action) => {
  switch (action.type) {
    case "agregar-tarea":
      return [
        ...initialState,
        { id: uuidv4(), name: action.payload.name, complete: false },
      ];
    default:
      return initialState;
  }
};

export const UseReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const inputNameRef = useRef();

  const handlerAddTodo = () => {
    const name = inputNameRef.current.value;
    if (name === "") return;
    dispatch({ type: "agregar-tarea", payload: { name: name } });
    inputNameRef.current.value = null;
  };

  return (
    <>
      <div style={{ fontSize: "20px" }}>X tareas por hacer</div>
      <input ref={inputNameRef} type="text" style={{ fontSize: "20px" }} />
      <button style={{ fontSize: "20px" }} onClick={handlerAddTodo}>
        Agregar tarea
      </button>
      <button style={{ fontSize: "20px" }}>Eliminar tareas realizadas</button>
      <TodoList todos={todos} />
    </>
  );
};
