import React from 'react';
import './index.css';
import types from '../../../utils/commonTypes';
import PropTypes from 'prop-types';

Modal.defaultProps = { // 默认属性
    bg: "rgba(0,0,0,.5)"
}

Modal.propTypes = {
    bg: PropTypes.string,
    children: types.children,
    onClose: PropTypes.func
}

export default function Modal(props) {

    return (
        <div className="modal" style={{
            background: props.bg
        }}
        onClick={e => {
            if (e.target.className === 'modal') {
                props.onClose();
            }
        }}
        >
            <div className="modal-center">
                {props.children}
            </div>
        </div>
    )
}
