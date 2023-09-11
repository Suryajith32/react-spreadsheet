import React, { memo } from 'react'
import TableColumn from '../TableColumn'

const TableRow = ({ row, rowIndex, inView }) => {

    console.log('tablerow rendered')

    return (
        <tr key={rowIndex}>
            <th scope="row">{rowIndex + 1}</th>
            {row.map((numbers, columnIndex) => (
               <TableColumn numbers={numbers} columnIndex={columnIndex} inView={inView} rowIndex={rowIndex}/>
            ))}
        </tr>
    )
}

export default memo(TableRow)