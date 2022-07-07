import { useEffect, useState } from 'react';
// import {  } from 'react';


const AddTodo = () => {
    const [taskName, setTaskName] = useState('');
    const [taskType, setTaskType] = useState('');
    const [taskStatus, setTaskStatus] = useState('');
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const data = localStorage.getItem('todos');
        if (data) {
            setTodos(JSON.parse(data));
        }
    }, [count])

    // var dateObj = new Date();
    // var month = dateObj.getUTCMonth() + 1; //months from 1-12
    // var day = dateObj.getUTCDate();
    // var year = dateObj.getUTCFullYear();
    // var newdate = day + "/" + month + "/" + year;
    // console.log(newdate);

    // 8/19/2020, 9:29:51 AM. (date and time in a specific timezone)
    const time = (new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }));

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
        console.log("Click");
        event.preventDefault();
        setTaskName('');
        setTaskType('');
        setTaskStatus('');

        const todo = {
            name: taskName,
            type: taskType,
            status: taskStatus,
            time: time
        }
        // console.log(todo);
        const todoList = localStorage.getItem('todos');
        // console.log(todoList);
        if (!todoList) {
            localStorage.setItem('todos', JSON.stringify([todo]));
        }
        else {
            const gettodo = JSON.parse(localStorage.getItem('todos'));
            // console.log(gettodo);
            gettodo.push(todo);
            localStorage.setItem('todos', JSON.stringify(gettodo));
            setTodos(gettodo);
        }
        setCount(count + 1);
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
                    autoComplete='off'
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
                    <option className="rounded">In Progress</option>
                    <option className="rounded">Completed</option>
                </select><br />
                {/* Task Submit */}

                <input
                    className='mt-4 bg-teal-300 shadow-sm rounded-lg lg:w-64 w-full cursor-pointer'
                    type="submit"
                    value="Add Task" />
            </form>
            {/* Task List */}
            <table class="min-w-full border-collapse block md:table mt-5">
                <thead class="block md:table-header-group">

                    <tr class="border  border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                        <th class="bg-teal-300 p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell"> </th>
                        <th class="bg-teal-300 p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">Task Name</th>
                        <th class="bg-teal-300 p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">Task Type</th>
                        <th class="bg-teal-300 p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">Task Status</th>
                        <th class="bg-teal-300 p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">Creating Date</th>
                        <th class="bg-teal-300 p-2 text-black font-bold md:border md:border-grey-500 text-left block md:table-cell">Action</th>
                    </tr>
                </thead>
                <tbody class="block md:table-row-group">
                    {
                        todos.map(todo =>
                            <tr class={(todo.status === 'Completed') ? "bg-green-300 border border-grey-500 md:border-none block md:table-row" : "bg-gray-300 border border-grey-500 md:border-none block md:table-row"}>
                                <td class="p-2">
                                    <input type="checkbox" class="w-5 h-5" />
                                </td>
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{todo.name}</td>
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{todo.type}</td>
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{todo.status}</td>
                                <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">{todo.time}</td>
                                <td>
                                    <button>
                                        <svg class="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                            </path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>



        </div>

    );
};

export default AddTodo;
