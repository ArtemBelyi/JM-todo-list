import React from 'react';
import { formatDistance, subDays } from 'date-fns'

const Task = ({ prop }) => {

    const dates = formatDistance(subDays(new Date(), 3), new Date())
    return (
        <div className="view">
            <input className="toggle" type="checkbox"></input>
            <label>
                <span className="description">{ prop }</span>
                <span className="created">{ dates }</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
}
export default Task;