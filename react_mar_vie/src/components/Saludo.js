import React from 'react'

const Saludo = ({ nombre, apellido, email }) => {
    // const nombre = props.nombre

    // Destructuring
    // const { nombre, apellido } = props

    return (
        <>
          <h3>Bienvenido {nombre} {apellido}, a mi aplicación de React</h3>  
        </>
    )
}

export default Saludo