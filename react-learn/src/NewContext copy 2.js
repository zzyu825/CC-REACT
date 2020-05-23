import React, { Component } from 'react';

const ctx1 = React.createContext();
const ctx2 = React.createContext();

function ChildA(props) {
    return (
        <ctx2.Provider value={{
            a: 456,
            c: "def"
        }}>
            <div>
                <h1>子组件A</h1>
                <h2>
                    <ctx1.Consumer>
                        {val => <>{val.a},{val.b}</>}
                    </ctx1.Consumer>
                </h2>
                <ChildB />
            </div>
        </ctx2.Provider>
    )
}

class ChildB extends Component {

    render() {
        return (
            <ctx1.Consumer>
                {val => (
                    <>
                        <div>
                            <h1>子组件B</h1>
                            <h2>上下文的数据：a：{val.a}，b：{val.b}</h2>
                            <button onClick={() => {
                                val.onChange && val.onChange(val.a + 2)
                            }}>子组件B a + 2</button>
                        </div>
                        <div>
                            <ctx2.Consumer>
                                {val => (
                                    <h2>
                                        来自上下文ctx2：a：{val.a}，b：{val.b}
                                    </h2>
                                )}
                            </ctx2.Consumer>
                        </div>
                    </>
                )}
            </ctx1.Consumer>
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
            <ctx1.Provider value={this.state}>
                <ChildA />
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>父组件 a + 1</button>
            </ctx1.Provider>
        )
    }
}
