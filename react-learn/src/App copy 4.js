import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function A(props) {
    console.log(props.match)
    return (
        <div>
            <h1>组件A</h1>
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
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
