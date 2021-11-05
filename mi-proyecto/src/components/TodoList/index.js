import React from 'react'
import { Todo } from './Todo'

export const TodoList = ({todos}) => {
    return (
        todos.map((todo, index) => {
            return <Todo key={index} todo={todo} />
        })
    )
}
