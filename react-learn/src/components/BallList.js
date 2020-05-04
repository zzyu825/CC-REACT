import React, { Component } from 'react';
import Ball from './Ball'
import { getRandom } from '../util'

export default class BallList extends Component {

    state = {
        ballInfoes: []
    }

    constructor(props) {
        super(props);

        // 每隔一秒产生一个小球的数据
        // 所有数据全部随机
        this.timer = setInterval(() => {
            const info = {
                xSpeed: getRandom(100, 300),
                ySpeed: getRandom(50, 200),
                left: getRandom(0, window.innerWidth - 100),
                top: getRandom(0, window.innerHeight - 100),
                bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
            };
            this.setState({
                ballInfoes: [...this.state.ballInfoes, info]
            });
            if (this.state.ballInfoes.length === 10) {
                clearInterval(this.timer);
            }
        }, 1000)
    }

    render() {
        const ballArrs = this.state.ballInfoes.map((item, i) => <Ball {...item} key={i}/>);
        return (
            <div>
                {ballArrs}
            </div>
        )
    }
}
