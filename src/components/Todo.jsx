import React, {useEffect, useState} from 'react'
import Button from './Button'
import Modal from './Modal'
import TodoView from './TodoView'

function Todo(props) {
    const [todoList, setTodoList] = useState([])
    const [maxx, setMaxx] = useState(0)
    const [modalShow, setModalShow] = useState(false)


    function handleNewTodo(todoTitle) {
        const storedData = todoList.concat({"id": maxx+1, "desc": todoTitle});
        setTodoList(storedData)
        setMaxx(storedData.length)
        setModalShow(false)
    }

    function handleDelete(id) {
        const storedData = todoList.filter(ele => ele.id !== id)
        setTodoList(storedData)
    }

    function renderModal(event) {	
        setModalShow(true)
    }

    function closeModal(event) {
        setModalShow(false)
    }

    useEffect(() => {
        let storedData = localStorage.getItem('todos')
        if (storedData) {
            setTodoList(JSON.parse(storedData))
            setMaxx(todoList.length)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todoList));
    }, [todoList])

    return (
        <>
            <TodoView todoList={todoList} deleteTask={handleDelete}/>
            <Button name="New Task" handleClick={renderModal}/>
            <Modal show={modalShow} addNewTodo={handleNewTodo} onClose={closeModal}/>
        </>
    )

}

export default Todo
