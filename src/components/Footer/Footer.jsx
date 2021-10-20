import React from 'react';

import TaskFilter from '../TaskFilter/TaskFilter';

const Footer = ({count, clearCompleted, filter, onFilterSelect}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{ count } items left</span>
            <TaskFilter filter= { filter } onFilterSelect= { onFilterSelect }/>
            <button className="clear-completed" onClick={ clearCompleted }>Clear completed</button>
        </footer>
    )
}
export default Footer;