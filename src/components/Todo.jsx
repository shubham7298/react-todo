import React, {Component} from 'react'
import Button from './Button'
import Modal from './Modal'
import TodoView from './TodoView'

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            todoObject: [
                {
                    "id": 1,
                    "desc": "Learn React"
                },
                {
                    "id": 2,
                    "desc": "Learn Angular"
                },
                {
                    "id": 3,
                    "desc": "Learn Vue"
                },
                {
                    "id": 4,
                    "desc": "Learn Django"
                },
                {
                    "id": 5,
                    "desc": "Learn Flask"
                }
            ],
            maxx: 5
        }

        this.handleNewTodo = this.handleNewTodo.bind(this)
    }

    handleNewTodo = (todoTitle) => {
        let newArray = this.state.todoObject.concat({"id": this.state.maxx+1, "desc": todoTitle});
        this.setState((prevState, props) => ({
            // if(maxx != prevState.maxx) {
                todoObject: newArray,
                maxx: prevState.maxx+1
            // }
        }))
        console.log(this.state.todoObject)
    }


  render() {
    // const clickEvent = props => <Modal show={true} addNewTodo={this.props.addNewTodo}/> 
    const clickEvent = props => <Modal show={true} addNewTodo={this.handleNewTodo}/> 
    return (
        <>
            <TodoView todoList={this.state.todoObject}/>
            <Button name="ADD" addNewTodo={this.handleNewTodo} clickEvent={clickEvent}/>
        </>
    )
  }
}

export default Todo
