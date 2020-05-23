import React, { Component } from 'react';

const ctx = React.createContext();

function ChildA(props) {
    return (
        <div>
            <h1>子组件A</h1>
            <h2>
                <ctx.Consumer>
                    {val => <>{val.a},{val.b}</>}
                </ctx.Consumer>
            </h2>
            <ChildB />
        </div>
    )
}

class ChildB extends Component {

    // static contextType = ctx;

    // render() {
    //     return (
    //         <div>
    //             <h1>子组件B</h1>
    //             <h2>上下文的数据：a：{this.context.a}，b：{this.context.b}</h2>
    //             <button onClick={() => {
    //                 this.context.onChange && this.context.onChange(this.context.a + 2)
    //             }}>子组件B a + 2</button>
    //         </div>
    //     )
    // }

    render() {
        return (
            <ctx.Consumer>
                {val => (<div>
                    <h1>子组件B</h1>
                    <h2>上下文的数据：a：{val.a}，b：{val.b}</h2>
                    <button onClick={() => {
                        val.onChange && val.onChange(val.a + 2)
                    }}>子组件B a + 2</button>
                </div>)}
            </ctx.Consumer>
        )
    }


}

export default class NewContext extends Component {

    state = {
        a: 123,
        b: 'abc',
        onChange: (newVal) => {
            this.setState({
                a: newVal
            })
        }
    }

    render() {
        return (
            <ctx.Provider value={this.state}>
                <ChildA />
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>父组件 a + 1</button>
            </ctx.Provider>
        )
    }
}
