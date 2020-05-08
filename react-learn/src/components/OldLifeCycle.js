import React, { Component } from 'react'

export default class OldLifeCycle extends Component {

    state = {
        n: 0
    }

    constructor(props) {
        super(props);
        console.log("constructor：一个新的组件诞生了！");
        // this.setState({
        //     n: 3
        // })
    }

    componentWillMount() {
        console.log("componentWillMount：组件即将被挂载！");
        // this.setState({
        //     n: 3
        // })
    }

    componentDidMount() {
        console.log("componentDidMount：挂载完成！");
    }
    
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps：接收到新的属性值", this.props, nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate：是否应该重新渲染！", this.props, nextProps, this.state, nextState);
        // return false;
        if (this.props.n === nextProps.n && this.state.n === nextState.n) {
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate：组件即将被重新渲染！")
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate：组件已经完成重新渲染！", prevProps, prevState);
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount：组件即将被销毁！")
    }
    
    render() {
        // this.setState({
        //     n: 3
        // })
        console.log("render：渲染，返回的React元素会被挂载到虚拟dom树中")
        return (
            <div>
                <h1>旧版生命周期</h1>
                <h2>属性n：{this.props.n}</h2>
                <h2>状态n：{this.state.n}</h2>
                <button onClick={() => {
                    this.setState(cur => {
                        return {
                            n: cur.n + 1
                        }
                        // return {
                        //     n: 0
                        // }
                    })
                }}>状态n加1</button>
            </div>
        )
    }
}
