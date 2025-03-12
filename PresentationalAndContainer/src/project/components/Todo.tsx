import { TodoItem } from "../type/types"

type Props = TodoItem & {
    onComplete: (id: number) => void;
}

export const Todo = ({ id, title, completed, onComplete }: Props) => {
    return (
        <article>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onComplete(id)}
            />
            {title}
        </article>
    )
}