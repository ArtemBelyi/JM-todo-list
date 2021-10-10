import React from 'react';

import TaskFilter from '../TaskFilter/TaskFilter';

const Footer = () => {
    return (
        <footer class="footer">
            <span class="todo-count">1 items left</span>
            <TaskFilter />
            <button class="clear-completed">Clear completed</button>
        </footer>
    )
}
export default Footer;