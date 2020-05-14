import React, { Component } from 'react';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';

/**
 * 一组多选框
 */
export default class CheckboxGroup extends Component {

    /**
     * 默认属性值
     */
    static defaultProps = {
        datas: [],
        chooseDatas: []
    };

    static propTypes = {
        name: PropTypes.string.isRequired,
        datas: types.groupDatas.isRequired,
        chooseDatas: types.chooseDatas,
        onChange: PropTypes.func
    };

    handelChange = e => {
        let newArr;
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value];
        } else {
            newArr = this.props.chooseDatas.filter(it => it !== e.target.value);
        }
        this.props.onChange && this.props.onChange(newArr, this.props.name, e);
    }

    /**
     * 得到一组多选框
     */
    getCheckboxes() {
        return this.props.datas.map(item => (
            <label key={item.value}>
                <input type="checkbox" 
                    name={this.props.name}
                    checked={this.props.chooseDatas.includes(item.value)}
                    value={item.value}
                    onChange={this.handelChange}
                />
                {item.text}
            </label>
        ))
    }

    render() {
        const arr = this.getCheckboxes();
        return (
            <div>
                {arr}
            </div>
        )
    }
}

