import React from 'react';


export default class Task extends React.Component {

    state = { isCompleted: false }

    onCompletedClick = () => {
        this.setState({ isCompleted: !this.state.isCompleted })
    }
    render() {
        const { description } = this.props
        let className = ''
        className = this.state.isCompleted ? className += 'completed' : ''

        return (
            <li className= { className }>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={ this.onCompletedClick }></input>
                    <label>
                        <span className="description">{ description }</span>
                        <span className="created">create 5 days ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
            </li>
        )

    }
}