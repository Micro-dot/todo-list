import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {

    return (
        <div class="todo-container">
            <ul class="todo-list">
                {
                    todos.map(todo => (
                        <Todo todo={todo}
                            setTodos={setTodos}
                            key={todo.id}
                            todos={todos}

                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;