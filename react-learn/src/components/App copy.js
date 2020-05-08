import React, { Component } from 'react';
import OldLifeCycle from './OldLifeCycle'

export default class App extends Component {

    state = {
        number: 0,
        show: true
    }

    render() {
        const comp = this.state.show ? <OldLifeCycle n={this.state.number} /> : null;
        return (
            <div>
                {/* <OldLifeCycle n={this.state.number} /> */}
                {comp}
                <button onClick={() => {
                    this.setState(cur => {
                        return {
                            number: cur.number + 1
                        }
                        // return {
                        //     // 不仅是属性值变化，只要重新赋值就算变化
                        //     number: 0
                        // }
                    })
                }}>属性n加1</button>
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>显示隐藏</button>
            </div>
        )
    }
}
