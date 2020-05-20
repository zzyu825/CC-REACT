import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {

    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired
    };

    getRef= el => {
        this.div = el;
    }

    // 计时器间隔时间
    tick = 16;

    // 计时器
    timer = null;

    /**
     * 切换到第几张图片
     * 调用该函数，此组件会经过一段动画完成过渡
     * @param {*} index 图片下标，从0开始
     * @memberof imgContainer
     */
    switchTo(index) {
        // 根据index计算容器最终的marginLeft
        const targetLeft = this.props.imgWidth * -index;
        // 得到当前的marginLeft
        let curLeft = parseFloat(getComputedStyle(this.div).marginLeft);
        // 计算运动次数
        const times = Math.ceil(this.props.duration / this.tick);
        // 当前运动次数
        let curTimes = 0;
        // 计算总的运动距离
        const totalDis = targetLeft - curLeft;
        // 计算每次运动的距离
        const dis = totalDis / times;
        // 先停止上一个计时器
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            curLeft += dis;
            this.div.style.marginLeft = curLeft + 'px';
            curTimes ++;
            if (curTimes === times) {
                // 停止运动
                this.div.style.marginLeft = targetLeft + "px";
                clearInterval(this.timer);
            }
        }, this.tick)
    }

    render() {
        const imgs = this.props.imgSrcs.map((it,i) => <img key={i} src={it} alt="" style={{
            width: this.props.imgWidth,
            height: this.props.imgHeight,
            float: 'left'
        }}/>)
        return (
            <div 
                ref={this.getRef}
                style={{
                    width: this.props.imgSrcs.length * this.props.imgWidth,
                    height: this.props.imgHeight
                }}>
                {imgs}
            </div>
        )
    }
}
