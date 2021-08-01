import React, {Component} from 'react'
import Button from './Button';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        this.setState({show: false})
        this.props.addNewTodo(this.state.value)
        event.preventDefault();
    }

  render() {
      const isShow = this.props.show
    return isShow && (
     <div className="modal" onClick={this.props.onClose}>
         <div className="modal-content" onClick={e => e.stopPropagation()}>
                <input type="text" value={this.state.value} name="task" onChange={this.handleChange}/>
                <br/>
                <Button name="Add Task" handleClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default Modal
