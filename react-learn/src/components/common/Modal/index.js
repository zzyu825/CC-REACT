import React from 'react';
import './index.css'

export default function index(props) {
    // 默认属性
    const defaultProps = {
        bg: "rgba(0,0,0,.5)"
    }
    const assign = {...defaultProps, ...props}

    return (
        <div className="modal" style={{
            background: assign.bg
        }}
        onClick={e => {
            if (e.target.className === 'modal') {
                assign.onClose();
            }
        }}
        >
            <div className="modal-center">
                {props.children}
            </div>
        </div>
    )
}
