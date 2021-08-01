import React, {Component} from 'react'
import Button from './Button'

class Card extends Component {
    constructor(props) {
        super(props)
        this.deleteTask = this.deleteTask.bind(this)
    }

    deleteTask(event) {
        this.props.deleteTask(this.props.id)
    }
  render() {
    return (
      <div className="card">
          <span>{this.props.desc}</span>
          <Button name="DONE" handleClick={this.deleteTask}/>
      </div>
    )
  }
}

export default Card
