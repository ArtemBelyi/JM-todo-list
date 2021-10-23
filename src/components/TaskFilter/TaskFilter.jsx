import React from 'react';
import PropTypes from 'prop-types';

export default class TaskFilter extends React.Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterSelect: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'All', label: 'All' },
      { name: 'Completed', label: 'Completed' },
      { name: 'Active', label: 'Active' },
    ];
  }

  render() {
    const { filter, onFilterSelect } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const active = filter === name;
      const newClass = active ? 'selected' : '';
      return (
        <li key={name}>
          <button type="button" className={newClass} onClick={() => onFilterSelect(name)}>
            {label}
          </button>
        </li>
      );
    });
    return <ul className="filters">{buttons}</ul>;
  }
}
