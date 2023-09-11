import React, { memo } from 'react'
import TableRow from '../TableRow'
import { useSelector } from 'react-redux'

const TableSheet = () => {
    const rowLength = useSelector((state) => state.data.value.initialMatrix?.length)
    const colLength = useSelector((state) => state.data.value.initialMatrix[0]?.length)
    const Rows = []
    for (let index = 0; index < rowLength; index++) {
     Rows.push(<TableRow rowIndex={index} colLength={colLength}/>)     
    }
    console.log('sheet renderd')
    return (
        <tbody>
           {Rows}
        </tbody>
    )
}

export default memo(TableSheet)