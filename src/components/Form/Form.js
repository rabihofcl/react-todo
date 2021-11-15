import React from "react";
// importing css
import './Form.css'

const Form = ({ setInputText, todos, setTodos, inputText ,setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random()*1000},
        ]);
        setInputText("");
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