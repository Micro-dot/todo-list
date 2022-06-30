import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        if (inputText ==="") {
            return alert("Please enter a todo");
        }
        e.preventDefault();
        setTodos([...todos, { Text: inputText, completed: false, id: Math.random() * 1000 }]);
        setInputText("");

    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" required />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
};

export default Form;