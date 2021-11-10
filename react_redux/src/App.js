import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state=> state.counter)
  const isLogged = useSelector(state=> state.isLogged)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={()=>dispatch(increment())}>sumar</button>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(decrement())}>restar</button>
      {isLogged ? <h3>Esta es informacion que no puede leer alguien que no este logueado</h3> : ''}
    </>
  );
}

export default App;
