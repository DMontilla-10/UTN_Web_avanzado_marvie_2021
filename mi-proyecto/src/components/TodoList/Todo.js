import React from 'react'

export const Todo = ({todo, cambiarEstadoTarea}) => {

    const cambiarEstadoAlHacerClick = () => {
        cambiarEstadoTarea(todo.id)
    }

    return (
        <div>
            <input type='checkbox' onChange={cambiarEstadoAlHacerClick} checked={todo.complete} />
            {todo.name}
        </div>
    )
}
