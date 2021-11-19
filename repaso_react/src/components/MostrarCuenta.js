import React, {useContext} from 'react'
import { CuentaContexto } from '../context/Context'
import { useSelector } from 'react-redux'

export const MostrarCuenta = () => {
    // Context
    const { cuentaUno } = useContext(CuentaContexto)
    
    // Redux
    const laCuentaUno = useSelector(state => state.cuentaUno)

    return (
        <div>
            La cuenta esta en {laCuentaUno}
        </div>
    )
}
