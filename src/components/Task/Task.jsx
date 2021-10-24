import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    updateInterval: PropTypes.number,
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    updateInterval: 15000,
  };

  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.createDateTask = Date.now();
  }

  textData = (data) => formatDistanceToNow(data, { includeSeconds: true });

  tick = () => {
    this.setState(() => ({
      seconds: this.textData(this.createDateTask),
    }));
  };

  componentDidMount = () => {
    const { updateInterval } = this.props;
    this.interval = setInterval(() => this.tick(), updateInterval);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    const { description, deleteTask, isCompleted, onToggleDone } = this.props;
    const { seconds } = this.state;

    let className = '';
    if (isCompleted) className += 'completed';

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleDone} />
          <label>
            <span className="description">{description}</span>
            <span className="created">created {seconds} ago</span>
          </label>
          <button className="icon icon-edit" type="button" label="edit" />
          <button className="icon icon-destroy" type="button" label="destroy" onClick={deleteTask} />
        </div>
      </li>
    );
  }
}
