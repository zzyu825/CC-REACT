import React, { Component } from 'react';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';
import withDataGroup from '../HOC/withDataGroup'

class Radio extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired, // 当前选中的value值
        info: types.singleData.isRequired, // 当前单选框的value
        onChange: PropTypes.func
    };

    handelChange = e => {
        this.props.onChange && this.props.onChange(e.target.value);
    }

    render() {
        return <label>
                    <input type="radio" 
                        name={this.props.name}
                        checked={this.props.value === this.props.info.value}
                        value={this.props.info.value}
                        onChange={this.handelChange}
                    />
                    {this.props.info.text}
                </label>
    }
}

export default withDataGroup(Radio);

