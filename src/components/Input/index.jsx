import React from 'react'

const Input = (props) => {
  return (
    <input type="numbers" value={props?.inView? props?.value:''} onChange={(event) => props.onChange(event, rowIndex, columnIndex)} />
  )
}

export default Input