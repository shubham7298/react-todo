import React, {Component} from 'react'
import Modal from './Modal';

class Button extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(e) {
    //     this.props.addNewTodo(e)
    // }

  render() {
    return (
        <button className="button" onClick={this.props.handleClick}>
            {this.props.name}
        </button>
    )
  }
}

export default Button
