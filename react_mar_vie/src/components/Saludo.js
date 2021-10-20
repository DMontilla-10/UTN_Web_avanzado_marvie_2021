import React from "react";
import './saludo.css'

const Saludo = ({ nombre, apellido }) => {
  // const nombre = props.nombre

  // Destructuring
  // const { nombre, apellido } = props

  return (
    <>
      {/* <h3 className="Saludo"> */}
      <h3 style={{color: 'blue', marginLeft: '15px'}} >  
        Bienvenido {nombre} {apellido}, a mi aplicación de React
      </h3>
    </>
  );
};

export default Saludo;
