import React from 'react';
import Task from '../Task/Task';

const TaskList = ({ taskList, deleteTask }) => {
    const elem = taskList.map(item => {
        const { id, description } = item
        return (
            <Task key= { id } description={ description } deleteTask={ () => deleteTask(id) }/>
        )
    })
    return (
        <ul className="todo-list">{ elem }</ul>
    )
}
export default TaskList;