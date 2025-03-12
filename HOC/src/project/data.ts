import { ProductType, TodoType } from "./types";

const products: ProductType[] = [
    {
        id: 0,
        title: "Meat"
    },
    {
        id: 1,
        title: "Milk"
    },
    {
        id: 2,
        title: "Vegatable"
    },
    {
        id: 3,
        title: "Bread"
    },
];

const todos: TodoType[] = [
    {
        id: 0,
        title: 'Complete homework',
        completed: false
    },
    {
        id: 1,
        title: 'Cleaning the home',
        completed: false
    },
    {
        id: 2,
        title: 'Exercise',
        completed: false
    },
]

export { products, todos }