import React, { useState } from 'react';

const Contador = () => {
    // const [cuenta, setCuenta] = useState(0)
    // const [estado, setEstado] = useState({
    //     nombre: 'Daniel',
    //     apellido: 'Montilla',
    //     cuenta: 0
    // })

    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [cuenta, setCuenta] = useState(0)

    console.log('este es el estado de cuenta: ', cuenta)
    console.log('este es el estado de nombre: ', nombre)
    console.log('este es el estado de apellido: ', apellido)

    // const aumentarCuenta = () => {
    //     setCuenta(cuenta + 1)
    // }

    const aumentarCuenta = () => {
        setCuenta(prevCuenta => prevCuenta + 1)
    }

    // spread operator
    // const aumentarCuenta = () => {
    //     setEstado({...estado, cuenta: estado.cuenta+1})
    // }

    const disminuirCuenta = () => {
        setCuenta(prevCuenta => prevCuenta - 1)
    }

    return(
        <>
            <button onClick={()=> aumentarCuenta()}>sumar</button>
            {cuenta}
            {/* {estado.cuenta} */}
            <button onClick={()=> disminuirCuenta()}>restar</button>
            {nombre}
            {apellido}
        </>
    )
}

export default Contador