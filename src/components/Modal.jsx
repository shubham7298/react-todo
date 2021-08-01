import React, {Component} from 'react'

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
    return (
      <div show={this.state.show}>
          <form onSubmit={this.handleSubmit}>
            <label>
                Task:
                <input type="text" value={this.state.value} name="task" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
            </form>
      </div>
    )
  }
}

export default Modal
