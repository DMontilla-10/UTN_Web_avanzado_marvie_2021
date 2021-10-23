import React from "react";
import './saludo.css'

const Saludo = ({ nombre, apellido, setNombre }) => {
  // const nombre = props.nombre

  // Destructuring
  // const { nombre, apellido } = props

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre)
  }

  return (
    <>
      {/* <h3 className="Saludo"> */}
      <h3 style={{color: 'blue', marginLeft: '15px'}} >  
        Bienvenido {nombre} {apellido}, a mi aplicación de React
        <button onClick={()=> cambiarNombre('Fabricio')}>CAMBIAR NOMBRE</button>
      </h3>
    </>
  );
};

export default Saludo;
