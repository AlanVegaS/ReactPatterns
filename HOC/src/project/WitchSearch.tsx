import React, { useState } from "react"
import { ProductType, TodoType } from "./types"

export const WithSearch = <T extends ProductType | TodoType>(
    Component: React.FC<{ query: string; dataset: T[] }>,
    dataset: T[]
) => {
    
    return () => {
        const [query, setQuery] = useState("");
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
        }

        return (
            <>
                <input onChange={handleChange} value={query} />
                <Component dataset={dataset} query={query} />
            </>
        )
    }
}