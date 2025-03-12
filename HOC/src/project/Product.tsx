import React from 'react'

type Props = {
    title: string
}

export const Product: React.FC<Props> = ({ title }) => {
    return (
        <>
            <div>{title}</div>
        </>
    )
}