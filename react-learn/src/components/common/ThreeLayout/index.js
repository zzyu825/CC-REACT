import React from 'react';
import './index.css';

export default function ThreeLayout(props) {

    const defaultProps = {
        leftWidth: 200,
        rightWidth: 200,
        minWidth: 800,
        gap: 10 // 间隙
    };
    const assign = {...defaultProps, ...props};

    return (
        <div className="three-layout" style={{
            minWidth: assign.minWidth
        }}>
            <div className="main">
                {props.children}
            </div>
            <div className="aside-left" style={{
                width: assign.leftWidth,
                marginRight: assign.gap
            }}>
                {props.left}
            </div>
            <div className="aside-right" style={{
                width: assign.rightWidth,
                marginLeft: assign.gap
            }}>
                {props.right}
            </div>
        </div>
    )
}
