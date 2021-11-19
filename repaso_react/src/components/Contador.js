import React, { useContext } from "react";
import { CuentaContexto } from "../context/Context";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, disminuir } from '../actions'

export const Contador = ({ sumar, restar }) => {
  //Redux
  const laCuentaUno = useSelector((state)=>state.cuentaUno)
  const dispatch = useDispatch()

  //Context
  const { cuentaUno } = useContext(CuentaContexto)
  
    return (
    <div>
      {/* <button onClick={restar}>-</button> */}
      <button onClick={()=>dispatch(disminuir())}>-</button>
      {/* {cuentaUno} */}
      {laCuentaUno}
      {/* <button onClick={sumar}>+</button> */}
      <button onClick={()=>dispatch(incrementar())}>+</button>
    </div>
  );
};
