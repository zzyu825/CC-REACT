import React, { Component } from 'react';
import Test from './Test'

export default class App extends Component {

    state = {
        number: 0
    }

    render() {
        return (
            <div>
                <Test n={this.state.number} />
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>父组件加1</button>
            </div>
        )
    }
}
