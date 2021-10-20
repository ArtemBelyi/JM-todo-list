import React from 'react';
import Task from '../Task/Task';
import PropTypes from 'prop-types';

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
TaskList.propTypes = {
    taskList: PropTypes.arrayOf(PropTypes.object),
    deleteTask: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired
}
export default TaskList;