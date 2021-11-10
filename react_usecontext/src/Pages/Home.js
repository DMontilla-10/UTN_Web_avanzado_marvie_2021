import React, {useContext} from 'react'
import { LoginContext } from '../Context/Context'

export const Home = () => {
    const { loggedIn } = useContext(LoginContext)

    return (
        <div>
            Este es el Home y el usuario esta {loggedIn ? 'logueado' : 'deslogueado'}
        </div>
    )
}
