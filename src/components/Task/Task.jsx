import React from 'react';


export default class Task extends React.Component {

    render() {
        const { description, deleteTask, isCompleted, onToggleDone } = this.props

        let className = ''
        if(isCompleted) className += 'completed'

        return (
            <li className= { className }>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={ onToggleDone }></input>
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