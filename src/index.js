import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';


const App = () => {

    const todoData = [
        {description: 'Eat breakfast', id: 1},
        {description: 'Learn JavaScript', id: 2},
        {description: 'Reading book', id: 3}
    ]
    return (
        <div className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList taskList = { todoData }/>
                <Footer />
            </section>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))