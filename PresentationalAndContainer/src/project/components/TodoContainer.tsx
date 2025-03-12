import { useEffect, useMemo, useState } from "react"
import { data } from "../data/dataFake";
import { TodoItem } from "../type/types"
import { TodoList } from "./TodoList";

export const TodoContainer = () => {

    const [todos, setTodos] = useState<TodoItem[]>([]);

    useEffect(() => {
        setTodos(data)
    }, [])

    const handleComplete = (id: number) => {
        const index = todos.findIndex(item => item.id === id)
        todos[index].completed = !todos[index].completed
        setTodos([...todos])
    }

    const todoCompleted = useMemo(() => {
        return todos.filter(item => item.completed).length
    })

    return (
        <TodoList items={todos} itemsCompleted={todoCompleted} onComplete={handleComplete} totalItems={todos.length}/>
    )
}