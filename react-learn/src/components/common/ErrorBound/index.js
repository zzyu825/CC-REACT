import React, { Component } from 'react'

export default class ErrorBound extends Component {

    state = {
        isError: false
    }

    static getDerivedStateFromError(error) {
        console.log('子组件发生错误：', error);
        return {
            isError: true
        }
    }

    componentDidCatch(error, info) {
        console.log("记录错误信息");
    }

    render() {
        setTimeout(() => {
            throw new Error("asfasdfasf");
        }, 1000);
        if (this.state.isError) {
            return <h1>发生错误了！</h1>
        }
        return this.props.children
    }
}
