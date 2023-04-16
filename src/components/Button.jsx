import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <button value={props.children} onClick={props.onClick} className={props.className}>{props.children}</button>
    )
}

export default Button