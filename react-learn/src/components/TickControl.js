import React, { Component } from 'react';
import Tick from './Tick'

export default class TickControl extends Component {

    state = {
        isOver: false
    }

    constructor(props) {
        super(props);
        // 使用bind第二种解决this指向方式
        // 会先获取对象自己身上的方法
        // 优点：效率稍高
        // this.handelClick = this.handelClick.bind(this);
        // this.handelOver = this.handelOver.bind(this);
    }

    // handelClick() {
    //     console.log('点击了');
    // }

    // handelOver() {
    //     // this -> undefined  react防止this指向出问题，总不能指向this.props
    //     console.log(this);
    //     this.setState({
    //         isOver: true
    //     })
    // }

    // 使用箭头函数第二种解决this指向方法
    // es7中的字段初始化器 以下方法不会在原型上，而是在对象上
    // 优点：效率高
    handelClick = () => {
        console.log('点击了');
    }

    handelOver = () => {
        this.setState({
            isOver: true
        })
    }

    render() {
        let status = '正在倒计时';
        if (this.state.isOver) {
            status = '倒计时完成';
        }
        return (
            <div>
                {/* 使用箭头函数第一种解决this指向方法 */}
                {/* <Tick 
                    number={10}
                    onClick={() => {
                        console.log('点击了');
                    }}
                    changeStatus={() => {
                        // console.log('执行了');
                        this.setState({
                            isOver: true
                        })
                    }}
                /> */}
                <Tick 
                    number={10}
                    onClick={this.handelClick}
                    onOver={this.handelOver}
                />
                {/* 使用bind第一种解决this指向方式 */}
                {/* 优点：书写方便 */}
                {/* <Tick 
                    number={10}
                    onClick={this.handelClick.bind(this)}
                    onOver={this.handelOver.bind(this)}
                /> */}
                <h2>{status}</h2>
            </div>
        )
    }
}
