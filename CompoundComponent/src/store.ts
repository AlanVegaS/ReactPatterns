import { createContext } from "react";
import { TodoContextInterface } from "./interfaces/interfaces";

export const TodoContext = createContext<TodoContextInterface>({
    selected: '',
    onSelect: () => { },
    showSelected: () => { return '' },
});