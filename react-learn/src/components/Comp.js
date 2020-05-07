import React, { Component } from 'react'

export default class Comp extends Component {

    state = {
        n: 0
    }

    constructor(props) {
        super(props);
        setInterval(() => {
            this.setState({
                n: this.state.n + 1
            });
            this.setState({
                n: this.state.n + 1
            });
            this.setState({
                n: this.state.n + 1
            });
        }, 1000)
    }

    handelClick = () => {
        this.setState(cur => {
            // 参数cur表示当前状态
            // 该函数的返回结果，会混合之前的的状态
            // 该函数依然是异步执行
            return {
                n: cur.n + 1
            }
        }, () => {
            // 所有状态改变完成后，才会执行
            console.log('状态全部更新', this.state.n)
        });
        console.log(this.state.n);

        this.setState(cur => ({
            n: cur.n + 1
        }));
        this.setState(cur => ({
            n: cur.n + 1
        }));
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
