import React, {Component} from 'react'
import Button from './Button'
import Modal from './Modal'
import TodoView from './TodoView'

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            todoObject: [],
            maxx: 0,
            modalShow: false
        }

        this.handleNewTodo = this.handleNewTodo.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.renderModal = this.renderModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentDidMount() {
        let storedData = JSON.parse(localStorage.getItem('todos'));
 console.log(storedData)
        if (localStorage.getItem('todos')) {
            this.setState({
                todoObject: storedData,
                maxx: storedData.length
            })
        }
    }

    handleNewTodo = (todoTitle) => {
        const storedData = this.state.todoObject.concat({"id": this.state.maxx+1, "desc": todoTitle});
        this.setState({
            todoObject: storedData,
            maxx: storedData.length,
            modalShow: false
        })
        localStorage.setItem('todos',JSON.stringify(storedData));
    }

    handleDelete = (id) => {
        const storedData = this.state.todoObject.filter(ele => ele.id !== id)
        localStorage.setItem('todos',JSON.stringify(storedData));
        this.setState({
            todoObject: storedData
        })
    }

    renderModal(event) {	
         this.setState({
             modalShow: true
         })
    }

    closeModal(event) {
        this.setState({
            modalShow: false
        })
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
