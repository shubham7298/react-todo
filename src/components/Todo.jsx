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
            maxx: 5,
            modalShow: false
        }

        this.handleNewTodo = this.handleNewTodo.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.renderModal = this.renderModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    handleNewTodo = (todoTitle) => {
        let newArray = this.state.todoObject.concat({"id": this.state.maxx+1, "desc": todoTitle});
        this.setState((prevState) => ({
                todoObject: newArray,
                maxx: prevState.maxx+1,
                modalShow: false
        }))
    }

    handleDelete = (id) => {
        this.setState((prevState) => ({
            todoObject: prevState.todoObject.filter(ele => ele.id != id)
        }))
    }

    renderModal(event) {	
         this.setState(prevState => ({
             modalShow: true
         }))
    }

    closeModal(event) {
        this.setState(prevState => ({
            modalShow: false
        }))
    }


  render() {
    return (
        <>
            <TodoView todoList={this.state.todoObject} deleteTask={this.handleDelete}/>
            <Button name="New Task" handleClick={this.renderModal}/>
            <Modal show={this.state.modalShow} addNewTodo={this.handleNewTodo} onClose={this.closeModal}/>
        </>
    )
  }
}

export default Todo
