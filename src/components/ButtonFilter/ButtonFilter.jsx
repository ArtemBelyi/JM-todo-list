import React from 'react';

export default class ButtonFilter extends React.Component {

    render() {
        const { label } = this.props
        return (
            <li>
                <button>{ label }</button>
            </li>
        )
    }
}