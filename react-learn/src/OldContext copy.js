import React, { Component } from 'react';
import PropTypes from 'prop-types';

const types = {
    a: PropTypes.number,
    b: PropTypes.string,
    onChangeA: PropTypes.func
}

function ChildA(props, context) {
    return <div>
        <h1>组件A</h1>
        <h2>a:{context.a},b:{context.b}</h2>
        <ChildB/>
    </div>
}

ChildA.contextTypes = types;

class ChildB extends Component {

    /**
     * 声明需要使用哪些上下文中的数据
     */
    // static contextTypes = {
    //     a: PropTypes.number,
    //     b: PropTypes.string
    // }
    static contextTypes = types;

    /**
     * 第一种获取方式
     */
    // constructor(props, context) {
    //     super(props, context)
    //     console.log(this.context);
    // }

    render() {
        return <div>
            {/* 第二种获取方式 */}
            <h1>子组件B，来自上下文的数据：a：{this.context.a}，b：{this.context.b}</h1>
            <button onClick={() => {
                this.context.onChangeA(this.context.a + 2)
            }}>子组件B a + 2</button>
        </div>
    }
}

export default class OldContext extends Component {

    state = {
        a: 123,
        b: "abc"
    }

    /**
     * 约束上下文中数据的类型
     */
    // static childContextTypes = {
    //     a: PropTypes.number,
    //     b: PropTypes.string
    // }
    static childContextTypes = types;

    /**
     * 得到上下文中的数据
     */
    getChildContext() {
        // return {
        //     a: 123,
        //     b: "abc"
        // }
        return {
            a: this.state.a,
            b: this.state.b,
            onChangeA: (newA) => {
                this.setState({
                    a: newA
                })
            }
        };
    }

    render() {
        return (
            <div>
                <ChildA />
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>父组件 a + 1</button>
            </div>
        )
    }
}
