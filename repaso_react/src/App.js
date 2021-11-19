import React, { useState, useEffect } from "react";
import { Contador } from "./components/Contador";
import { MostrarCuenta } from "./components/MostrarCuenta";
import { Formulario } from "./components/Formulario";
import { CuentaContexto } from "./context/Context";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const App = () => {
  const [cuentaUno, setCuentaUno] = useState();
  const [cuentaDos, setCuentaDos] = useState();

  useEffect(() => {
    setCuentaUno(0);
  }, []);

  useEffect(() => {
    setCuentaDos(0);
  }, []);

  const sumarCuentaUno = () => {
    setCuentaUno((prevCuentaUno) => prevCuentaUno + 1);
  };

  const restarCuentaUno = () => {
    setCuentaUno((prevCuentaUno) => prevCuentaUno - 1);
  };

  const sumarCuentaDos = () => {
    setCuentaDos((prevCuentaUno) => prevCuentaUno + 1);
  };

  const restarCuentaDos = () => {
    setCuentaDos((prevCuentaUno) => prevCuentaUno - 1);
  };

  return (
    // Context
    <CuentaContexto.Provider value={{ cuentaUno }}>
      <BrowserRouter>
        <Link to={'/contador'}>
        <div>Contador</div>
        </Link>
        <Link to={'/'}>
        <div>La cuenta</div>
        </Link>
        <Link to='/formulario'>
        <div>Formulario</div>
        </Link>
        <Routes>
          <Route path={'/'} element={<MostrarCuenta/>} />
          <Route path={'/contador'} element={<Contador/>} />
          <Route path={'/formulario'} element={<Formulario/>} />
        </Routes>
      </BrowserRouter>
      {/* <Contador
        sumar={sumarCuentaUno}
        restar={restarCuentaUno}
      /> */}
      {/* <Contador 
        cuenta={cuentaDos}
        sumar={sumarCuentaDos}
        restar={restarCuentaDos}
      /> */}
      {/* <MostrarCuenta /> */}
    </CuentaContexto.Provider>
  );
};
