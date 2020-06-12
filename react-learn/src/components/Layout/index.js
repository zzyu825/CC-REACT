import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.css'

export default class Layout extends Component {

    static propTypes = {
        header: PropTypes.element,
        aside: PropTypes.element,
        children: PropTypes.element
    };

    render() {
        return (
            <div className="container">
                <div className="header">
                    {this.props.header}
                </div>
                <div className="middle">
                    <div className="aside">
                        {this.props.aside}
                    </div>
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
