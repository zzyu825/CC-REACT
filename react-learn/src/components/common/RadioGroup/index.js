import React, { Component } from 'react'

/**
 * 一组单选框
 */
export default class RadioGroup extends Component {

    handelChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    /**
     * 得到一组单选框
     */
    getRadios() {
        return this.props.datas.map(item => (
            <label key={item.value}>
                <input type="radio" 
                    name={this.props.name}
                    checked={this.props.value === item.value}
                    value={item.value}
                    onChange={this.handelChange}
                />
                {item.text}
            </label>
        ))
    }

    render() {
        const arr = this.getRadios();
        return (
            <div>
                {arr}
            </div>
        )
    }
}

