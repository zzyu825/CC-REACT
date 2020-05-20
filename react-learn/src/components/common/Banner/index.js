import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import ImgContainer from './ImgContainer';
import SwitchArrow from './SwitchArrow';
import SwitchDot from './SwitchDot'

export default class Banner extends Component {

    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        autoDuration: 3000,
        duration: 500
    };

    static propTypes = {
        width: PropTypes.number.isRequired, // 容器宽度
        height: PropTypes.number.isRequired, // 容器高度
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径数组
        autoDuration: PropTypes.number.isRequired, // 自动切换的间隔时间
        duration: PropTypes.number.isRequired // 完成一次切换需要的时间
    };

    state = {
        curIndex: 0
    }

    timer = null;

    autoSwitch() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            let cur = this.state.curIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handelDot(cur);
        }, this.props.autoDuration);
    }

    componentDidMount() {
        this.autoSwitch();
    }
    
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    

    getRef = el => {
        this.container = el
    }

    handelArrow = type => {
        let cur = this.state.curIndex;
        if (type === 'left') {
            cur--;
            if (cur < 0) {
                cur = this.props.imgSrcs.length - 1;
            }
        } else {
            cur = (cur + 1) % this.props.imgSrcs.length;
        }
        this.handelDot(cur);
    }

    handelDot = cur => {
        this.setState({
            curIndex: cur
        });
        this.container.switchTo(cur);
    }

    render() {
        return (
            <div className="banner-container" style={{
                width: this.props.width,
                height: this.props.height
            }}
            onMouseEnter={() => {
                clearInterval(this.timer);
            }}
            onMouseLeave={()=>{
                this.autoSwitch();
            }}
            >
                <ImgContainer 
                    imgSrcs={this.props.imgSrcs}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    duration={this.props.duration}
                    ref={this.getRef}
                />
                <SwitchArrow handelClick={this.handelArrow}/>
                <SwitchDot 
                    dotArr={this.props.imgSrcs}
                    curIndex={this.state.curIndex}
                    handelClick={this.handelDot}
                />
            </div>
        )
    }
}
