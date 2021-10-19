import React from 'react';
import ButtonFilter from '../ButtonFilter/ButtonFilter';

export default class TaskFilter extends React.Component {
    render() {
        return (
            <ul className="filters">
                <ButtonFilter label="All" />
                <ButtonFilter label="Active" />
                <ButtonFilter label="Completed" />
            </ul>
        )
    }
}