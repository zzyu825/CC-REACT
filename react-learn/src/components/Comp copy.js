import React, { Component } from 'react'

export default class Comp extends Component {

    state = {
        n: 0
    }

    handelClick = () => {
        this.setState({
            n: this.state.n + 1
        }, () => {
            //状态完成改变之后触发，该回调运行在render之后
            console.log(this.state.n);
        });
        // 先打印，且n的值仍然是0，证明setState是异步的
        // console.log(this.state.n);
    }

    render() {
        console.log('render');
        return (
            <div>
                <p>{this.state.n}</p>
                <button onClick={this.handelClick}>点击+1</button>
            </div>
        )
    }
}
