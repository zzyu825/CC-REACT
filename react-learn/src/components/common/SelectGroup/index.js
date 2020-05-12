import React, { Component } from 'react'

/**
 * 一组下拉列表框
 */
export default class SelectGroup extends Component {

    handelChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    /**
     * 获取一组下拉列表框
     */
    getOptions() {
        return this.props.datas.map(item => (
            <option 
                value={item.value}
                key={item.value}
            >
                {item.text}
            </option>
        ))
    }

    render() {
        const arr = this.getOptions();
        return (
            <div>
                <select name={this.props.name}
                    value={this.props.value}
                    onChange={this.handelChange}
                >
                    {arr}
                </select>
            </div>
        )
    }
}

