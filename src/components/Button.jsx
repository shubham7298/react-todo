import React, {Component} from 'react'
import Modal from './Modal';

class Button extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            clicked: true
        }));
    }

  render() {
      const triggerOnClick = this.state.clicked ? this.props.clickEvent : null
    return (
        <>
            <button onClick={this.handleClick}>{this.props.name}</button>
            {/* {this.state.clicked ? <Modal show={true} addNewTodo={this.handleAddTodoCallback}/> : null} */}
            {this.state.clicked ? <Modal show={true} addNewTodo={this.props.addNewTodo}/> : null}
            {/* <triggerOnClick/> */}
        </>
    )
  }
}

export default Button
