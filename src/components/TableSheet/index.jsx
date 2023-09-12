import React from 'react'
import TableRow from '../TableRow'
import { useSelector } from 'react-redux'

const TableSheet = () => {
    const rowLength = useSelector((state) => state.data.value.initialMatrix?.length)
    const colLength = useSelector((state) => state.data.value.initialMatrix[0]?.length)
    const Rows = []
    for (let rowIndex = 0; rowIndex < rowLength; rowIndex++) {
     Rows.push(<TableRow rowIndex={rowIndex} colLength={colLength}/>)     
    }

    console.log('sheet renderd')
    return (
        <tbody>
           {Rows}
        </tbody>
    )
}

export default TableSheet