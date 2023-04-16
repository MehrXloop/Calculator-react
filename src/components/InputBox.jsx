import React from 'react'
import './InputBox.css'
function InputBox(props) {

  return (
    <div className='inputBox'>
      <input type="text" value={props.value} readOnly/>
    </div>
  )
}

export default InputBox