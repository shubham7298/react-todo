import React, {Component} from 'react'

class TitleBar extends Component {
  render() {
    return (
      <nav>
          <span className="app-title">{this.props.title}</span>
      </nav>
    )
  }
}

export default TitleBar
