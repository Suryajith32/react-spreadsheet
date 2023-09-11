import React, { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMatrix } from '../../store/reducer/dataReducer'
import { useInView } from 'react-intersection-observer'
import Input from '../Input'

const TableColumn = (props) => {
    const { columnIndex, rowIndex } = props
    const value = useSelector((state) => state.data.value.initialMatrix[rowIndex][columnIndex])
    const dispatch = useDispatch()

    const handleOnChange = useCallback((event, currentRowIndex, currentColumnIndex) => {
        const newValue = Number(event.target.value)
        const data = {
            newValue, currentRowIndex, currentColumnIndex
        }
        dispatch(updateMatrix(data))
    },[])
    console.log('column Rendered')

    const { ref, inView } = useInView({
        threshold: 1.0
    })

    return (
        <td key={columnIndex} ref={ref}>
            <Input onChange={handleOnChange} value={value} inView={inView}/>
        </td>
    )
}

export default memo(TableColumn)