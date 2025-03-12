import React from "react"
import { filterItems } from "./utils"
import { ProductType } from "./types";
import { Product } from "./Product";

type Props = {
    query: string;
    dataset: ProductType[];
}

export const ProductList: React.FC<Props> = ({ query, dataset }) => {
    const items = filterItems(query, dataset);
    return (
        <>
            {
                items.map((product) => (
                    <Product key={product.id} title={product.title} />
                ))
            }
        </>
    )
}