import { TodoItem } from "../type/types"
import { Todo } from "./Todo";

type Props = {
    items: TodoItem[];
    onComplete: (id: number) => void;
    itemsCompleted: number;
    totalItems: number;
}

export const TodoList = ({ items, onComplete, itemsCompleted, totalItems }: Props) => {
    return (
        <>
            <div>
                {itemsCompleted} of {totalItems} tasks completed
            </div>
            <section>
                {
                    items.map(item => (
                        <Todo key={String(item.id)} onComplete={onComplete} {...item}></Todo>
                    ))
                }
            </section>
        </>
    )
}