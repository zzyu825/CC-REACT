import React, { Component } from 'react'

export default class Tick extends Component {

    state = {
        number: this.props.number || 10
    }

    constructor(props) {
        super(props);
        console.log(props);
        const timer = setInterval(() => {
            this.setState({
                number: this.state.number - 1
            });
            if (this.state.number === 0) {
                clearInterval(timer);
                // 倒计时结束了应该做什么
                this.props.onOver();
            };
        }, 1000);
    }

    render() {
        return (
            <h1 onClick={this.props.onClick}>
                倒计时：{this.state.number}
            </h1>
        )
    }
}
