import React from 'react';
import { useState } from 'react';

const AllTask = () => {
    const todo = JSON.parse(localStorage.getItem('task'));
    console.log(todo)
    return (
        <div>
            <h1>{todo.name}</h1>
        </div>
    );
};

export default AllTask;