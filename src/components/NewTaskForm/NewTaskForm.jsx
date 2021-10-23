import React from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static propTypes = {
    addNewTask: PropTypes.func.isRequired,
  };

  state = { description: '' };

  onDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { addNewTask } = this.props
    const { description } = this.state
    addNewTask( description );
    this.removeInput();
  };

  removeInput() {
    this.setState({ description: '' });
  }

  render() {
    const { description } = this.state
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="header__form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onDescriptionChange}
            value={ description }
          />
        </form>
      </header>
    );
  }
}
