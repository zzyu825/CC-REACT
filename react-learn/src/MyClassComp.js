import React from 'react'
// import React, { Component } from 'react'

// export default class MyClassComp extends Component {}
export default class MyClassComp extends React.Component {
    // constructor(props) {
    //     super(props); // this.props = props
    //     console.log(props, this.props, props === this.props);
    // }

    /**
     * 该方法必须返回react元素
     */
    render() {
        // return <h1>类组件的内容</h1>
        // console.log(this.props);
        if (this.props.obj) {
            // this.props.obj.name = 'def';
            return (
                <>
                    <p>姓名：{this.props.obj.name}</p>
                    <p>年龄：{this.props.obj.age}</p>
                </>
            )
        } else if (this.props.ui) {
            return (
                <div>
                    <h1>下面是传递的内容</h1>
                    {this.props.ui}
                </div>
            )
        }
        return <h1>类组件的内容，传递的属性：{this.props.number}</h1>
    }
}