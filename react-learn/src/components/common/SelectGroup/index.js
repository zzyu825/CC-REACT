import React, { Component } from 'react';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';
import withDataGroup from '../HOC/withDataGroup'

class Option extends Component {

    static propTypes = {
        info: types.singleData.isRequired
    };

    render() {
        return <option 
                    value={this.props.info.value}
                >
                    {this.props.info.text}
                </option>
    }
}

const OptGroup = withDataGroup(Option);

export default class Select extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    };

    handelChange = e => {
        this.props.onChange && this.props.onChange(e.target.value);
    }

    render() {
        return <select name={this.props.name}
                    value={this.props.value}
                    onChange={this.handelChange}
                >
                    <OptGroup {...this.props}/>
                </select>
    }
}
