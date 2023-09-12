import React from 'react'
import TableColumn from '../TableColumn'

const TableRow = ({ rowIndex, colLength }) => {
    console.log('tablerow rendered')
    const colItems = []
    for (let index = 0; index < colLength; index++) {
        colItems.push(<TableColumn rowIndex={rowIndex} columnIndex={index} />)
    }

    return (
        <>
            <tr>
                <th scope="row">{rowIndex + 1}</th>
                {colItems}
            </tr>
        </>
    )
}

export default TableRow