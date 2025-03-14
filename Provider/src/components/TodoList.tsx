import React from 'react'
import { TodoItem } from '../interfaces/interfaces'
import { Todo } from './Todo'

interface Props {
    todos: TodoItem[]
}

export const TodoList: React.FC<Props> = ({ todos }) => {
    return (
        <>
            {
                todos.map(todo => (
                    <Todo key={String(todo.id)} {...todo} />
                ))
            }
        </>
    )
}
