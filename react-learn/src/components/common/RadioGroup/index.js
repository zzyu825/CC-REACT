import React, { Component } from 'react';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';

/**
 * 一组单选框
 */
export default class RadioGroup extends Component {

    /**
     * 默认属性值
     */
    static defaultProps = {
        datas: [],
        value: ""
    };

    static propTypes = {
        name: PropTypes.string.isRequired,
        datas: types.groupDatas.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    };

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

