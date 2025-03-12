import { ProductType, TodoType } from "./types";

export const filterItems = (query: string, items: ProductType[] | TodoType[]) => {
    if (query === "") return items;

    return items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
}