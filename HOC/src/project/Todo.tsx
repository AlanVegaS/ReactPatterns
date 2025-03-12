import React from 'react'

type Props = {
    title: string;
    completed: boolean;
}

export const Todo: React.FC<Props> = ({ title, completed }) => {
    const handleChange = () => {

    }

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={handleChange} />
            {title}
        </div>
    )
}
