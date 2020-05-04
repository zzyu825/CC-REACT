import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        n: 123
    }

    constructor(props) {
        super(props);
        this.timer = setInterval(() => {
            this.setState({
                n: this.state.n - 1
            })
        }, 1000);
    }

    render() {
        console.log('test组件渲染了')
        return (
            <div>
                <A n={this.state.n} />
            </div>
        )
    }
}

function A(props) {
    return <div>
        A组件：{props.n}
        <B n={props.n} />
    </div>
}

function B(props) {
    return <div>
        B组件：{props.n}
    </div>
}