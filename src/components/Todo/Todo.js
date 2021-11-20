import React from 'react'
import './Todo.css'

function Todo({ text, todo, todos, setTodos, setEditTodo }) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    const handleEdit =({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }


    return (
        <div  className="todo-div">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check fa-2x"></i></button>
            <button onClick={() => handleEdit(todo)} className="edit-btn"><i className="fas fa-pen fa-2x"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash fa-2x"></i></button>
        </div>
    )
}

export default Todo
