import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

export default class SwitchDot extends Component {

    static propTypes = {
        dotArr: PropTypes.arrayOf(PropTypes.string).isRequired,
        curIndex: PropTypes.number.isRequired,
        handelClick: PropTypes.func
    };

    render() {
        const dotArr = this.props.dotArr.map((it, i) => <span key={i} onClick={() => {
            this.props.handelClick && this.props.handelClick(i)
        }} 
        className={i === this.props.curIndex ? 'active' : ''}
        />)
        return (
            <div className="dots">
                {dotArr}
            </div>
        )
    }
}
