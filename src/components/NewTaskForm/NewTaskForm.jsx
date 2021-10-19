import React from 'react';


export default class NewTaskForm extends React.Component {

    state = {description: ''}

    onDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.props.addNewTask(this.state.description)
        this.removeInput()
        
    }
    removeInput() {
        this.setState({description: ''})
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form className="header__form" onSubmit={ this.onSubmit }>
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus 
                        onChange={ this.onDescriptionChange } 
                        value={ this.state.description }
                    ></input>
                </form>
            </header>
        )
    }
}
