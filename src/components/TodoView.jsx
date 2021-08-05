import React from 'react'
import Card from './Card'

function TodoView(props) {
    const todoItems = props.todoList.map((todoElement) =>
        <Card key={todoElement.id} id={todoElement.id} desc={todoElement.desc} deleteTask={props.deleteTask}/>
    )
    return (
        <div>
            <ul>
                {todoItems}
            </ul>
        </div>
    )
}

export default TodoView
