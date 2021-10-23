import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from '../TaskFilter/TaskFilter';

const Footer = ({ count, clearCompleted, filter, onFilterSelect }) => (
  <footer className="footer">
    <span className="todo-count">{count} items left</span>
    <TaskFilter filter={filter} onFilterSelect={onFilterSelect} />
    <button type="button" className="clear-completed" onClick={clearCompleted}>
      Clear completed
    </button>
  </footer>
);
Footer.propTypes = {
  count: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
};
export default Footer;
