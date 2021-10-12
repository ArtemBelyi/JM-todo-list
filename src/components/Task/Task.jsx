import React from 'react';


export default class Task extends React.Component {

    state = { isCompleted: false }

    onCompletedClick = () => {
        this.setState((state) => {
            return {
                isCompleted: !state.isCompleted
            }
        })
    }
    render() {
        const { description, deleteTask } = this.props
        let className = ''
        if(this.state.isCompleted) className += 'completed'

        return (
            <li className= { className }>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={ this.onCompletedClick }></input>
                    <label>
                        <span className="description">{ description }</span>
                        <span className="created">create 5 days ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={ deleteTask }></button>
                </div>
            </li>
        )

    }
}