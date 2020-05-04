import React, { Component } from 'react'

export default class Tick extends Component {

    // 初始化状态 方式二
    // es7 字段初始化器
    state = {
        number: this.props.number,
        n: 123
    }

    constructor(props) {
        super(props);
        // 初始化状态 方式一
        // this.state = {
        //     number: this.props.number
        // }

        this.timer = setInterval(() => {
            // 更改状态
            this.setState({
                // mixin混合
                number: this.state.number - 1
            }); // 重新设置状态，自动触发重新渲染
            if (this.state.number === 0) {
                clearInterval(this.timer);
            }
            // this.state.number - 1
            // this.render()
        }, 1000);

    }

    render() {
        return (
            // <div>
            //     {/* 倒计时剩余时间：{this.props.number} */}
            //     倒计时剩余时间：{this.state.number}
            // </div>
            <>
                <h2>倒计时剩余时间：{this.state.number}</h2>
                <p>{this.state.n}</p>
            </>
        )
    }
}
