import React, { Component } from 'react'

export default class ClassDefault extends Component {

    static defaultProps = {
        a: 123
    };

    // 先混合后执行constructor
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                a:{this.props.a}
            </div>
        )
    }
}

// 属性默认值
// ClassDefault.defaultProps = {
//     a: 1
// }
