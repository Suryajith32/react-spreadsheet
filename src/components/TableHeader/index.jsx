import React from 'react'
import { useSelector } from 'react-redux'

const TableHeader = () => {
    const headerLength = useSelector((state) => state.data.value.initialMatrix[0]?.length)
    const item = []
    for (let index = 0; index < headerLength; index++) {
        item.push(
            <th key={index}>
                <textarea readOnly className='table-header' key={index} value={index + 1}/>
            </th>
        )
    }
    console.log("header renderd")

    return (
        <thead>
            <tr className='table-header-row'>
                <th></th>
                {item}
            </tr>
        </thead>
    )
}

export default TableHeader