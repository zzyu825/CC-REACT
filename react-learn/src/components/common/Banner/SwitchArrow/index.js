import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'

export default class SwitchArrow extends Component {

    static propTypes = {
        handelClick: PropTypes.func
    };

    render() {
        return (
            <div className="arrow">
                <span className="left" onClick={() => {
                    this.props.handelClick && this.props.handelClick('left');
                }}>&lt;</span>
                <span className="right" onClick={() => {
                    this.props.handelClick && this.props.handelClick('right');
                }}>&gt;</span>
            </div>
        )
    }
}
