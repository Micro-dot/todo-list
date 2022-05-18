import React from 'react';

const Todo = ({ todo, setTodos, todos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandle = () => {
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        )
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed":''}`}>{todo.Text}</li>
            <button onClick={completeHandle} className='complete-btn' >
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default Todo;