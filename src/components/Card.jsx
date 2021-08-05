import React from 'react'
import Button from './Button'

function Card(props) {

    function deleteTask(event) {
        props.deleteTask(props.id)
    }

    return (
        <div className="card">
            <span>{props.desc}</span>
            <Button name="DONE" handleClick={deleteTask}/>
        </div>
    )
}

export default Card
