import { ReactNode } from "react";

export interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoContextInterface {
    selected: string;
    onSelect: (title: string) => void;
    showSelected: () => string;
}

export interface ChildrenProps {
    children: ReactNode;
}