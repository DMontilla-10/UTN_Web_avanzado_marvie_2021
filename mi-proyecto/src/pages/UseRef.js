// CASOS DE USO DE useRef()
// 1) Persistir valores entre renderizados
// 2) Referenciar elementos del DOM
// 3) Guardar valores previos del estado

import React, { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [nombre, setNombre] = useState("");

  // Esto no resuelve lo que necesitamos (devolver la cantidad de veces que se renderizo el componente)
  // const [cantidadDeRenders, setCantidadDeRenders] = useState(0)

  // useEffect(()=>{
  //     setCantidadDeRenders(prevState=>prevState+1)
  // })

  const cantidadDeRenders = useRef(0);

  useEffect(() => {
    cantidadDeRenders.current = cantidadDeRenders.current + 1;
  });

  const inputRef = useRef()

  const hacerFoco = () =>{
      inputRef.current.focus()
  }

  console.log('Esto es lo que se guarda en inputRef: ', inputRef.current)

  const nombrePrevio = useRef('')

  useEffect(()=>{
      nombrePrevio.current = nombre
  }, [nombre])

  return (
    <>
      <input
        ref={inputRef}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ fontSize: "15px" }}
      />
      <div>Mi nombre es {nombre}</div>
      <div>El componente se renderizó {cantidadDeRenders.current} veces</div>
      <button onClick={hacerFoco} style={{fontSize: '15px'}}>Hacer foco en input</button>
      ,<div>Mi nombre es {nombre} y solia ser {nombrePrevio.current}</div>
    </>
  );
};
