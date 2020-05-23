import React, { PureComponent } from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

export default class TaskList extends PureComponent {

    static propTypes = {
        tasks: PropTypes.arrayOf(PropTypes.shape({
            taskName: PropTypes.string.isRequired,
            isFinish: PropTypes.bool.isRequired
        }))
    };

    render() {
        console.log("TaskList Render");
        const ts = this.props.tasks.map((it, i) => <Task key={i} {...it} />);
        return (
            <ul>
                {ts}
            </ul>
        )
    }
}
