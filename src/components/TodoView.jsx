import React, {Component} from 'react'
import Card from './Card'

class TodoView extends Component {
  render() {
    const todoItems = this.props.todoList.map((todoElement) =>
        <Card key={todoElement.id} id={todoElement.id} desc={todoElement.desc} deleteTask={this.props.deleteTask}/>
    )
    return (
      <div>
          <ul>
             {todoItems}
          </ul>
      </div>
    )
  }
}

export default TodoView
