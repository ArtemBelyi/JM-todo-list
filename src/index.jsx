import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

class App extends React.Component {
  state = {
    todoData: [
      { description: 'Eat breakfast', id: 1, isCompleted: false },
      { description: 'Learn JavaScript', id: 2, isCompleted: false },
      { description: 'Reading book', id: 3, isCompleted: false },
      { description: 'Reading book Star Wars', id: 4, isCompleted: false },
    ],
    filter: 'All',
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((elem) => elem.id === id);
      const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((elem) => elem.id === id);
      const newItem = { ...todoData[index], isCompleted: !todoData[index].isCompleted };
      const newArr = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  addNewTask = (desc) => {
    const newItem = this.createTodoItem(desc);
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData].filter((item) => !item.isCompleted);
      return {
        todoData: newArr,
      };
    });
  };

  filterPost = (items, filter) => {
    if (filter === 'Active') {
      return items.filter((item) => !item.isCompleted);
    }
    if (filter === 'Completed') {
      return items.filter((item) => item.isCompleted);
    }

    return items;
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  createTodoItem(desc) {
    return {
      description: desc,
      isCompleted: false,
      id: Math.random() * 10,
    };
  }

  render() {
    const { todoData, filter } = this.state
    const count = todoData.filter((elem) => !elem.isCompleted).length;
    const visiblePosts = this.filterPost(todoData, filter);

    return (
      <div className="todoapp">
        <NewTaskForm addNewTask={this.addNewTask} />
        <section className="main">
          <TaskList taskList={visiblePosts} deleteTask={this.deleteTask} onToggleDone={this.onToggleDone} />
          <Footer
            count={count}
            clearCompleted={this.clearCompleted}
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </section>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
