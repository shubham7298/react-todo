import React, {Component} from 'react'
import Card from './Card'

class TodoView extends Component {
  render() {
    const todoItems = this.props.todoList.map((todoElement) =>
        <Card key={todoElement.id} desc={todoElement.desc}/>
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
