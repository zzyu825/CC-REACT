import React, { Component } from 'react'

export default class NewLifeCycle extends Component {

    state = {
        n: 0
    }

    // static getDerivedStateFromProps(props, state) {
    //     // this.setState({
    //     //     n: props.n
    //     // });
    //     // return null; // 不改变当前状态
    //     return { // 用新的对象替换掉之前的状态
    //         n: props.n
    //     }
    // }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log("getSnapshotBeforeUpdate");
        return 123;
    }
    
    componentDidUpdate(prevProps, prevState, snap) {
        console.log("componentDidUpdate", snap)
    }
    

    render() {
        return (
            <div>
                <h1>数字：{this.state.n}</h1>
                <p>
                    <button onClick={() => {
                        this.setState(cur => {
                            return {
                                n: cur.n
                            }
                        })
                    }}>状态n加1</button>
                </p>
            </div>
        )
    }
}
