import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import qs from 'query-string'

function A(props) {
    console.log(props.history.location, props.location, props.history.location === props.location)
    const query = qs.parse(props.location.search);
    const hash = qs.parse(props.location.hash);
    return (
        <div>
            <h1>组件A</h1>
            <p>
                访问地址：{props.location.pathname}
            </p>
            <p>
                地址参数：a:{query.a},b:{query.b}
            </p>
            <p>
                hash：c:{hash.c},d:{hash.d}
            </p>
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
                <Route path="/a" exact component={A} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
