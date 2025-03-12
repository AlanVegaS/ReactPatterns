import React from 'react'
import { TodoType } from './types';
import { filterItems } from './utils';
import { Todo } from './Todo';

type Props = {
    query: string;
    dataset: TodoType[]
}

export const TodoList: React.FC<Props> = ({ query, dataset }) => {

    const items = filterItems(query, dataset);
    return (
        <>
            {
                items.map((product) => (
                    <Todo key={product.id} title={product.title} completed={product.completed} />
                ))
            }
        </>
    )
}