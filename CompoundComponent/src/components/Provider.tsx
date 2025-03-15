import {  useContext, useState } from "react"
import { TodoContext } from "../store";
import { ChildrenProps } from "../interfaces/interfaces";

export const Provider = ({ children }: ChildrenProps) => {
    const [selected, SetSelected] = useState('');

    const onSelect = (title: string) => {
        SetSelected(title)
    }

    const showSelected = (): string => {
        return selected !== '' ? `Item selected: ${selected}` : `No item sellected`
    }

    return (
        <TodoContext.Provider value={{ selected, onSelect, showSelected }}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => {
    return useContext(TodoContext)
}