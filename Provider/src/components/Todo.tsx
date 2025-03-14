import React from "react"
import { TodoItem } from "../interfaces/interfaces"
import { useTodoContext } from "../store"

export const Todo: React.FC<TodoItem> = ({ id, title, completed }) => {

    const { onComplete } = useTodoContext();

    return (
        <>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onComplete(id)}
            />
            {title}
        </>
    )
}