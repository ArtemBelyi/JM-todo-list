import React from 'react';

import TaskFilter from '../TaskFilter/TaskFilter';
import PropTypes from 'prop-types';

const Footer = ({count, clearCompleted, filter, onFilterSelect}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{ count } items left</span>
            <TaskFilter filter= { filter } onFilterSelect= { onFilterSelect }/>
            <button className="clear-completed" onClick={ clearCompleted }>Clear completed</button>
        </footer>
    )
}
Footer.propTypes = {
    count: PropTypes.number.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterSelect: PropTypes.func.isRequired
}
export default Footer;