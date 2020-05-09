import React, { Component } from 'react';
import Modal from './common/Modal';

export default class Test extends Component {

    state = {
        showModal: false
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.showModal ?
                        (
                            <Modal onClose={this.hideModal}>
                                <div style={{
                                    background: '#fff'
                                }}>
                                    <h1>这是朦层内容</h1>
                                    <button onClick={this.hideModal}>关闭朦层</button>
                                </div>
                            </Modal> 
                        ) : null
                }
                <button onClick={this.showModal}>显示朦层</button>
            </div>
        )
    }
}
