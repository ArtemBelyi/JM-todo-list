import React from 'react';
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types';


export default class Task extends React.Component {

    static propTypes = {
        prop: PropTypes.arrayOf(PropTypes.object),
        deleteTask: PropTypes.func.isRequired,
        onToggleDone: PropTypes.func.isRequired
    }

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
        const { updateInterval } = this.props
        this.interval = setInterval(() => this.tick(), updateInterval)
    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    static defaultProps = {
        updateInterval: 15000
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