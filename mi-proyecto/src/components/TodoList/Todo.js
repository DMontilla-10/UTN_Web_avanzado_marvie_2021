import React from 'react'

export const Todo = ({todo}) => {
    return (
        <div>
            <input type='checkbox' />
            {todo.name}
        </div>
    )
}
