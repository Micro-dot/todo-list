import React from 'react';

const AllTask = () => {
    const todo = JSON.parse(localStorage.getItem('todos'));
    return (
        <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="lg:w-full sm:w-40  text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Task Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    {
                        todo.map(todos => {
                            console.log(todos);
                            <tr class="bg-white border-b ">
                                <tbody>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">

                                    </th>
                                    <td class="px-6 py-4">
                                        Sliver
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600  hover:underline">Edit</a>
                                    </td>
                                </tbody>
                            </tr>
                        })
                    }

                </table>
            </div>

        </div >)
};

export default AllTask;