import React, { Component } from 'react';

const ctx = React.createContext();

class ChildB extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log("运行了优化");
        return false;
    }
    
    render() {
        return (
            <h1>子组件B</h1>
        )
    }
}

export default class NewContext extends Component {

    state = {
        ctx: {
            a: 123,
            b: 'abc',
            onChange: (newVal) => {
                this.setState({
                    a: newVal
                })
            }
        }
    }

    // state = {ctx: this.state.ctx}

    render() {
        return (
            <ctx.Provider value={this.state.ctx}>
                <ChildB />
                <button onClick={() => {
                    this.setState({})
                }}>父组件 a + 1</button>
            </ctx.Provider>
        )
    }
}
