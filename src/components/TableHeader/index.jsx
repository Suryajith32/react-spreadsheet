import React from 'react'

const TableHeader = ({index}) => {
    console.log("header renderd")

    return (
        <thead>
            <tr>
                <th key={index}>{index}</th>
            </tr>
        </thead>
    )
}

export default TableHeader