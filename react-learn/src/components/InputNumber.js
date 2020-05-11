import React, { Component } from 'react'

export default class InputNumber extends Component {

    state = {
        val: 123
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.val} onChange={e => {
                    this.setState({
                        val: e.target.value.replace(/\D/g, '')
                    })
                }}/>
            </div>
        )
    }
}
