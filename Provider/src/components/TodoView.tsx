import { useTodoContext } from "../store";
import { TodoList } from "./TodoList";

export const TodoView = () => {
    const { todos } = useTodoContext();

    return <TodoList todos={todos} />;
};