import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';

class App extends React.Component {

    state = {
        todoData: [
            {description: 'Eat breakfast', id: 1, isCompleted: false},
            {description: 'Learn JavaScript', id: 2, isCompleted: false},
            {description: 'Reading book', id: 3, isCompleted: false},
            {description: 'Reading book Star Wars', id: 4, isCompleted: false}
        ]
    }
    deleteTask = (id) => {
        this.setState(({ todoData }) => {
        
            const index = todoData.findIndex((elem) => elem.id === id)
            const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)]

            return {
                todoData: newArr
            }
        })
    }
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((elem) => elem.id === id)
            const newItem = { ...todoData[index], isCompleted: !todoData[index].isCompleted }
            const newArr = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)]

            return {
                todoData: newArr
            }
        })
    }
    addNewTask = (desc) => {
        const newItem = this.createTodoItem(desc)
        this.setState(({ todoData }) => {
            let newArr = [...todoData, newItem]
            return {
                todoData: newArr
            }
        })
    }
    createTodoItem(desc) {
        return {
            description: desc,
            isCompleted: false,
            id: Math.random() * 10
        }
    }
    clearCompleted = () => {
        this.setState(({ todoData }) => {
            let newArr = [...todoData].filter(item => !item.isCompleted)
            return {
                todoData: newArr
            }
        })
    }

    render() {

        const count = this.state.todoData.filter((elem) => !elem.isCompleted).length

        return (
            <div className="todoapp">
            <NewTaskForm addNewTask={ this.addNewTask }/>
            <section className="main">
                <TaskList 
                    taskList = { this.state.todoData }
                    deleteTask={ this.deleteTask } 
                    onToggleDone={ this.onToggleDone }
                />
                <Footer count={ count } clearCompleted = { this.clearCompleted }/>
            </section>
        </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'))