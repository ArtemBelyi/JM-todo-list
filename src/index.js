import React from 'react';
import ReactDom from 'react-dom';

import './index.css';
import Footer from './components/Footer/Footer';
import TaskList from './components/TaskList/TaskList';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';


const App = () => {
    return (
        <div className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList />
                <Footer />
            </section>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))