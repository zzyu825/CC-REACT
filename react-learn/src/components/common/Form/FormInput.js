import React, { Component } from 'react';
import ctx from './FormContext';
import PropTypes from 'prop-types'

export default class FormInput extends Component {

    static contextType = ctx;

    static defaultProps = {
        type: "text"
    };

    static propTypes = {
        name: PropTypes.string.isRequired, // 文本框的名称
        type: PropTypes.string.isRequired // 文本框的类型
    };

    render() {
        return (
            <input 
                value={this.context.formData[this.props.name] || ''}
                onChange={e => {
                    this.context.onChange(this.props.name, e.target.value);
                }}
                type={this.props.type} 
                name={this.props.name} 
            />
        )
    }
}
