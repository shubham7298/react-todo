import React from 'react'

function Button(props) {
    return (
        <button className="button" id={props.id} onClick={props.handleClick} disabled={props.disabled}>
            {props.name}
        </button>
    )
}

export default Button
