import React, {useState} from 'react'
import Button from './Button';

function Modal(props) {
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        props.onClose()
        props.addNewTodo(value)
        setValue('')
        event.preventDefault();
    }

    return props.show && (
     <div className="modal" onClick={props.onClose}>
         <div className="modal-content" onClick={e => e.stopPropagation()}>
                <input type="text" value={value} name="task" onChange={handleChange}/>
                <br/>
                <Button disabled={value.length<=0} id="submitModalInput" name="Add Task" handleClick={handleSubmit}/>
        </div>
      </div>
    )
}

export default Modal
