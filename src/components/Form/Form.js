import React, {useEffect} from "react";
// importing css
import './Form.css'

const Form = ({ setInputText, todos, setTodos, inputText ,setStatus, editTodo, setEditTodo}) => {

    const updateTodo = (text, id, completed) => {
        const newTodo = todos.map((todo) => 
        todo.id === id ? {text, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() => {
        if (editTodo) {
            setInputText(editTodo.text);
        } else {
            setInputText("");
        }
    }, [setInputText, editTodo])


    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random()*1000},
            ]);
            setInputText("");
        } else {
            updateTodo(inputText, editTodo.id, editTodo.completed)
        }
        
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }



    return (
        <form>
            <div className='form-div'>
                <input onChange={inputTextHandler} value={inputText} type="text" className='todo-input' />
                <button onClick={submitTodoHandler} type='submit' className='todo-add-button'><i className="far fa-plus-square fa-3x" ></i></button>
                <select onChange={statusHandler} name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>
    );
}

export default Form