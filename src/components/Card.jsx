import React, {Component} from 'react'
import Button from './Button'

class TodoView extends Component {
  render() {
    return (
      <div class="card">
          <span>{this.props.desc}</span>
          <Button  name="DONE" />
      </div>
    )
  }
}

export default TodoView
