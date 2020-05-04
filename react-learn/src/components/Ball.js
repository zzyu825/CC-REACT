import React, { Component } from 'react'
import './Ball.css'

export default class Ball extends Component {

    constructor(props) {
        super(props);
        // 需要传递的属性有：初始速度xSpeed/ySpeed、初始位置left/top、背景色bg
        // 传递过来的属性除背景色外都需要作为自身的状态进行维护
        // 如果初始位置和背景颜色没有传递的还会使用默认值
        this.state = {
            xSpeed: this.props.xSpeed,
            ySpeed: this.props.ySpeed,
            left: this.props.left || 0,
            top: this.props.top || 0
        }

        const duration = 16; // 间隔时间
        setInterval(() => {
            const disX = this.state.xSpeed * duration / 1000; // 速度以秒/像素为单位
            const disY = this.state.ySpeed * duration / 1000;
            // 根据速度改变left/top值
            let newLeft = this.state.left + disX;
            let newTop = this.state.top + disY;

            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed // 速度反向
                })
            } else if (newLeft >= window.innerWidth - 100) {
                newLeft = window.innerWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed
                })
            }

            if (newTop <= 0) {
                newTop = 0;
                this.setState({
                    ySpeed: -this.state.ySpeed // 速度反向
                })
            } else if (newTop >= window.innerHeight - 100) {
                newTop = window.innerHeight - 100;
                this.setState({
                    ySpeed: -this.state.ySpeed
                })
            }

            this.setState({
                left: newLeft,
                top: newTop,
            });
        }, duration)
    }

    render() {
        return (
            <div className="ball" style={{
                left: this.state.left,
                top: this.state.top,
                background: this.props.bg || '#f00'
            }}>
                
            </div>
        )
    }
}
