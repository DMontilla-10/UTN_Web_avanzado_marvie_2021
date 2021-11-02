import React, { useState, useMemo, useEffect } from "react";

export const UseMemo = () => {
  const [numero, setNumero] = useState(0);
  const [modoOscuro, setModoOscuro] = useState(false);

  const dobleDeUnNumero = useMemo(() => {
    return funcionLenta(numero);
  }, [numero]);

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: modoOscuro ? "#000" : "#FFF",
      color: modoOscuro ? "#FFF" : "#000",
    };
  }, [modoOscuro]);

  useEffect(() => {
    console.log("Cambio el tema");
  }, [themeStyle]);

  return (
    <>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(parseInt(e.target.value))}
        style={{ fontSize: "15px" }}
      />
      <button
        onClick={() => setModoOscuro((prevState) => !prevState)}
        style={{ fontSize: "15px" }}
      >
        Cambiar Tema
      </button>
      <div style={themeStyle}>{dobleDeUnNumero}</div>
    </>
  );
};

const funcionLenta = (num) => {
  console.log("Llamando a la funcionLenta");
  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
};
