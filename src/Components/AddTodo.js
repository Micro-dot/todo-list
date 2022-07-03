import React from 'react';
import { useState } from 'react';

const AddTodo = () => {
    const [taskName, setTaskName] = useState('');
    const [taskType, setTaskType] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    }

    const handleTaskType = (e) => {
        setTaskType(e.target.value);
    }

    const handleTaskStatus = (e) => {
        setTaskStatus(e.target.value);
    }
    const handleAddTask = event => {
        event.preventDefault();
        let taskInfo = {
            name: taskName,
            type: taskType,
            status: taskStatus,
        }
        console.log(taskInfo);
        setTaskName('');
        setTaskType('');
        setTaskStatus('');
    }
    return (
        <div className='flex flex-col items-center rounded'>
            <form action='' onSubmit={handleAddTask}>
                {/* Task Name */}
                <h1 className='text-xl '>Task Name</h1>
                <input
                    type="text"
                    name='taskName'
                    value={taskName}
                    onChange={handleTaskName}
                    className='mt-1 pl-4 pb-1 border-t bg-slate-100 shadow-md rounded-lg lg:w-64'
                    placeholder='Name Your Task'
                    required />
                {/* Task Type  */}
                <h1 className='text-xl mt-4'>Task Type</h1>
                <input
                    type="text"
                    name='taskType'
                    value={taskType}
                    onChange={handleTaskType}
                    className='mt-1 pl-4 pb-1 border-t bg-slate-100 shadow-md rounded-lg lg:w-64'
                    placeholder='Ex: Reading Book'
                    required />
                <h1 className='mt-4 text-xl'>Status</h1>
                {/* Task Status */}
                <select name='status' value={taskStatus} className='p-1 rounded-md mt-1' onChange={handleTaskStatus}> Select
                    <option className="rounded" hidden></option>
                    <option className="rounded">Not Started</option>
                    <option className="rounded">In Progress</option>
                    <option className="rounded">Completed</option>
                </select><br />
                {/* Task Submit */}
                <input
                    className='mt-4 bg-teal-300 shadow-sm rounded-lg lg:w-64 w-full cursor-pointer'
                    type="submit"
                    value="Add Task" />
            </form>
        </div>
    );
};

export default AddTodo;
