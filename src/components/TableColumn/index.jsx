import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateMatrix } from '../../store/reducer/dataReducer'

const TableColumn = (props) => {
    const { numbers, columnIndex, inView, rowIndex } = props
    const dispatch = useDispatch()

    const handleOnChange = useCallback((event, currentRowIndex, currentColumnIndex) => {
        console.log('column Rendered')
        const newValue = Number(event.target.value)
        const data = {
            newValue, currentRowIndex, currentColumnIndex
        }
        dispatch(updateMatrix(data))
    },[])


    return (
        <td key={columnIndex}>
            {inView ? <input type="numbers" defaultValue={numbers} onChange={(event) => handleOnChange(event, rowIndex, columnIndex)}/> : <input type='numbers' />}
        </td>
    )
}

export default memo(TableColumn)