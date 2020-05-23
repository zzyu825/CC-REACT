import React, { Component } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

export default class Test extends Component {

    state = {
        tasks: []
    }

    componentDidMount() {
        const ts = [];
        for (let i = 1; i <= 10; i++) {
            ts.push({
                taskName: `任务${i}`,
                isFinish: Math.random() > 0.5
            })
        }
        this.setState({
            tasks: ts
        })
    }
    
    handelAdd = newTask => {
        this.setState({
            tasks: [
                ...this.state.tasks,
                newTask
            ]
        })
        // this.state.tasks.push(newTask)
    }

    render() {
        console.log("TaskContainer Render，数组长度：", this.state.tasks.length)
        return (
            <div>
                {/* <AddTask onAdd={task => {
                    this.setState({
                        tasks: [
                            ...this.state.tasks,
                            task
                        ]
                    })
                }} /> */}
                <AddTask onAdd={this.handelAdd} />
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}
