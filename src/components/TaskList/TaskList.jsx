import React from 'react';
import Task from '../Task/Task';

const TaskList = ({ taskList }) => {
    const elem = taskList.map(item => {
        const { id, label } = item
        return (
            <li key = { id }>
                <Task prop = { label }/>
            </li>
        )
    })
    return (
        <ul className="todo-list">{ elem }</ul>
    )
}
export default TaskList;