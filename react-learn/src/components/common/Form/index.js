import React, { Component } from 'react';
import { Provider } from './FormContext';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormButton from './FormButton';

export default class Form extends Component {

    state = {
        formData: {}, // 表单数据对象
        onChange: (name, val) => { // 修改formData中的数据
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: val
                }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func
    };

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

Form.Input = FormInput;
Form.Button = FormButton;
