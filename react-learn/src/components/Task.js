// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Task.css';
// import { ObjectEqual } from '../utils/help'

// class PureComponent extends Component {
//     shouldComponentUpdate(nextProps, nextState) {
        
//     }
// }

function Task(props) {
    console.log("Task Render");
    return (
        <li className={props.isFinish ? 'finish' : ''}>
            {props.taskName}
        </li>
    )
}

Task.protoTypes = {
    taskName: PropTypes.string.isRequired, // 任务名称
    isFinish: PropTypes.bool.isRequired // 任务是否完成
}

export default  React.memo(Task);

// export default class Task extends PureComponent {

//     static propTypes = {
//         taskName: PropTypes.string.isRequired, // 任务名称
//         isFinish: PropTypes.bool.isRequired // 任务是否完成
//     };

//     // shouldComponentUpdate(nextProps, nextState) {
//     //     console.log("Task是否重新渲染")
//     //     if (ObjectEqual(this.props, nextProps) && ObjectEqual(this.state, nextState)) {
//     //         return false
//     //     }
//     //     return true;
//     // }

//     render() {
//         console.log("Task Render")
//         return (
//             <li className={this.props.isFinish ? 'finish' : ''}>
//                 {this.props.taskName}
//             </li>
//         )
//     }
// }
