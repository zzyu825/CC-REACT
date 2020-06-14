import React, { Component } from 'react'

export default class StudentSearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {...{key: '', sex: -1}, ...this.props.defaultVal}
    }

    handleChange = e => {
        this.setState({
            sex: +e.target.value
        })
    }

    handelClick = e => {
        this.props.submit && this.props.submit(this.state);
    }

    render() {
        return (
            <div>
                关键字：
                <input type="text" value={this.state.key} onChange={e => {
                    this.setState({
                        key: e.target.value
                    })
                }}/>
                性别：
                <label>
                    <input type="radio" value={-1} onChange={this.handleChange} checked={this.state.sex === -1} name="sex"/>
                    不限
                </label>
                <label>
                    <input type="radio" value={0} onChange={this.handleChange} checked={this.state.sex === 0} name="sex"/>
                    男
                </label>
                <label>
                    <input type="radio" value={1} onChange={this.handleChange} checked={this.state.sex === 1} name="sex"/>
                    女
                </label>
                <button onClick={this.handelClick}>查询</button>
            </div>
        )
    }
}
