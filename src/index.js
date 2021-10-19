import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

class App extends React.Component {

    state = {
        todoData: [
            {description: 'Eat breakfast', id: 1},
            {description: 'Learn JavaScript', id: 2},
            {description: 'Reading book', id: 3}
        ]
    }
    deleteTask = (id) => {
        this.setState(({ todoData }) => {
        
            const index = todoData.findIndex((elem) => elem.id === id)
            const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)]
            console.log(newArr)
            return {
                todoData: newArr
            }
        })
    }

    render() {
        return (
            <div className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList taskList = { this.state.todoData } deleteTask={ this.deleteTask }/>
                <Footer />
            </section>
        </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'))