import { createContext, ReactNode, useContext, useState } from "react";
import { data } from "./data/data";
import { TodoItem } from "./interfaces/interfaces";

interface StoreProps {
    children: ReactNode;
}

interface AppContextType {
    todos: TodoItem[];
    onComplete: (id: number) => void;
}

const TodoContextState: AppContextType = {
    todos: [],
    onComplete: () => { },
}

const TodoContext = createContext<AppContextType>(TodoContextState);

const Store = ({ children }: StoreProps) => {
    const [todos, setTodos] = useState<TodoItem[]>(data as TodoItem[]);

    const onComplete = (id: number): void => {
        console.log('complete');

        const index = todos.findIndex(item => item.id === id)
        todos[index].completed = !todos[index].completed
        setTodos([...todos])
    };

    return (
        <TodoContext.Provider value={{ todos, onComplete }}>
            {children}
        </TodoContext.Provider>
    );
}

const useTodoContext = () => useContext(TodoContext)

export { useTodoContext, Store }