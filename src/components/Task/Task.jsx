import React from 'react';
import { formatDistanceToNow } from 'date-fns'


export default class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = { seconds: 0 }
        this.createDateTask = Date.now()

    }
    textData = (data) => {
        return formatDistanceToNow(data,{includeSeconds: true})
    }

    tick = () => {
        this.setState(state => ({
            seconds: this.textData(this.createDateTask)
        }))
    }
    componentDidMount = () => {
        this.interval = setInterval(() => this.tick(), 10000)
    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

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
                        <span className="created">created { this.state.seconds } ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={ deleteTask }></button>
                </div>
            </li>
        )

    }
}