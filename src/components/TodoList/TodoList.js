import React from "react";
import Todo from "../Todo/Todo";
import './TodoList.css'

const TodoList = ({todos, setTodos, filterTodos, setEditTodo}) => {
    return (
        <div className='todolist-div'>
            <div className='todo-container'>
                <ul className='todo-list'>
                    {filterTodos.map((todo) => (
                        <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} text={todo.text} setEditTodo={setEditTodo}/>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default TodoList