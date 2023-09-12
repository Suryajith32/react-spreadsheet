import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateMatrix } from '../../store/reducer/dataReducer'
import { useInView } from 'react-intersection-observer'
import Input from '../Input'

const TableColumn = (props) => {
    const { columnIndex, rowIndex } = props
    const dispatch = useDispatch()

    const handleOnChange = useCallback((event, currentRowIndex, currentColumnIndex) => {
        const newValue = Number(event.target.value)
        const data = {
            newValue, currentRowIndex, currentColumnIndex
        }
        dispatch(updateMatrix(data))
    }, [])
    console.log('column Rendered')

    const { ref, inView } = useInView({
        root:document.getElementsByClassName('matrix-table')[0],
        rootMargin:'100px'
    })

    return (
        <td key={columnIndex} ref={ref}>
            {!inView ? <p></p>: <Input onChange={handleOnChange} inView={inView} columnIndex={columnIndex} rowIndex={rowIndex} />}
        </td>
    )
} 

export default TableColumn