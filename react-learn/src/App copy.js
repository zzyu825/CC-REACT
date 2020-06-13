import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function A(props) {
    console.log(props)
    return (
        <div>
            <h1>组件A</h1>
            <button onClick={() => {
                props.history.push('/b', "状态数据")
            }}>跳转到B</button>
        </div>
    )
}

function B(props) {
    // 获取状态数据
    console.log(props.history.location.state);
    return (
        <div>
            <h1>组件B</h1>
            <button onClick={() => {
                props.history.push('/a')
            }}>跳转到A</button>
        </div>
    )
}

function NotFound() {
    return (
        <h1>找不到页面</h1>
    )
}

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/a" component={A} />
                <Route path="/b" component={B} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
