import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

// Ciclos de vida de un componente
// 1) Cuando el componente se monta [Primer renderizado]
// 2) Cuando el componente se actualiza
// 3) Cuando el componente se desmonta

const Tabs = () => {
    const [resourceType, setResourceTye] = useState('posts');

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then(json => console.log(json))
    }, [resourceType])

    return (
        <>
        {/* <button onClick={()=> setResourceTye('posts')}> POSTEOS </button> */}
        <Button variant="outlined" onClick={()=> setResourceTye('posts')}>posteos</Button>
        <button onClick={()=> setResourceTye('users')}> USUARIOS </button>
        <button onClick={()=> setResourceTye('comments')}> COMENTARIOS </button>
        </>
    )





//     const [cuenta, setCuenta] = useState(0)
//     const [nombre, setNombre] = useState()

//     // Esto se ejecuta cada vez que el componente se renderiza
//     useEffect(()=> {
//         console.log('El componente se renderizó')
//     })

//     // Esto se ejecuta solo la primera vez que el componente se renderiza
//     useEffect(()=>{
//         console.log('El componente se renderizo por primera vez')
//     }, [])

//     // Esto se ejecuta cuando se actualiza el componente
//     useEffect(()=> {
//         console.log('El componente se actualizó')
//     }, [nombre, cuenta]) 

//     useEffect(() => {
//         console.log('Se montó el componente')
//         // Esto se ejecuta cuando el componente se desmonta
//         return (() => {
//             console.log('Se desmontó el componente')
//         })
//     }, [cuenta])

//     const aumentarCuenta = () => {
//         setCuenta(prevCuenta => prevCuenta + 1)
//     }

//     return(
//         <>
//             <button onClick={()=> aumentarCuenta()}>sumar</button>
//             {cuenta}
//         </>
//     )
}

export default Tabs