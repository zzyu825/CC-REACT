import React, { Component } from 'react';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';
import withDataGroup from '../HOC/withDataGroup'

class Checkbox extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        chooseDatas: types.chooseDatas.isRequired,
        onChange: PropTypes.func,
        info: types.singleData.isRequired
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

    render() {
        return (<label>
                    <input type="checkbox" 
                        name={this.props.name}
                        checked={this.props.chooseDatas.includes(this.props.info.value)}
                        value={this.props.info.value}
                        onChange={this.handelChange}
                    />
                    {this.props.info.text}
                </label>)
    }
}

export default withDataGroup(Checkbox);

