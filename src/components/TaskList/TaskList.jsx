import React from 'react';
import Task from '../Task/Task';

const TaskList = ({ taskList, deleteTask, onToggleDone }) => {
    const elem = taskList.map(item => {
        const { id, ...prop } = item
        return (
            <Task 
                key= { id }
                {...prop}
                deleteTask={ () => deleteTask(id) }
                onToggleDone={ () => onToggleDone(id) }
            />
        )
    })
    return (
        <ul className="todo-list">{ elem }</ul>
    )
}
export default TaskList;