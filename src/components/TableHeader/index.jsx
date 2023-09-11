import React from 'react'

const TableHeader = ({ matrix }) => {
    return (
        <thead>
            <tr>
                {matrix[0]?.map((_, colIndex) => (
                    <th key={colIndex}>{colIndex }</th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader