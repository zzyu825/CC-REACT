import React, { PureComponent } from 'react';

export default class AddTask extends PureComponent {

    state = {
        name: ""
    }

    render() {
        console.log("AddTask Render")
        return (
            <div>
                <input type="text"
                    value={this.state.name}
                    onChange={e => {
                        this.setState({
                            name: e.target.value
                        })
                    }}
                />
                <button onClick={() => {
                    this.props.onAdd && this.props.onAdd({
                        TaskName: this.state.name,
                        isFinish: false
                    });
                    this.setState({
                        name: ""
                    })
                }}>添加任务</button>
            </div>
        )
    }
}
