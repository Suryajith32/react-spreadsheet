import React, { memo } from 'react'
import TableRow from '../TableRow'

const TableSheet = ({matrix, inView}) => {
    console.log('sheet renderd')
    return (
        <tbody>
            {matrix.map((row, rowIndex) => (
               <TableRow row={row} rowIndex={rowIndex} inView={inView}/>
            ))}
        </tbody>
    )
}

export default memo(TableSheet)