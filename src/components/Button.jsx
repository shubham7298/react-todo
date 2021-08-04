import React, {Component} from 'react'
// import Modal from './Modal';

class Button extends Component {

  render() {
    return (
        <button className="button" id={this.props.id} onClick={this.props.handleClick} disabled={this.props.disabled}>
            {this.props.name}
        </button>
    )
  }
}

export default Button
