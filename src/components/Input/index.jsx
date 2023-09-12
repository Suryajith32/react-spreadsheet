import React from 'react'
import { useSelector } from 'react-redux'

const Input = (props) => {
  const { rowIndex, columnIndex, onChange } = props
  const value = useSelector((state) => state.data.value.initialMatrix[rowIndex][columnIndex])
  console.log('input box rendered')
  return (
    <>
      <input name='input' defaultValue={value} onChange={(event) => onChange(event, rowIndex, columnIndex)} />
    </>
  )
}

export default Input