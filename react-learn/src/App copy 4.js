import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// /a
function A() {
    return <h1>组件A</h1>
}

// /b
function B() {
    return <h1>组件B</h1>
}

// 任意路径
function C() {
    return <h1>组件C</h1>
}

// class Route extends React.Component {
//     render() {
//         if (是否匹配(this.props.path)) {
//             const Comp = this.props.component;
//             return <Comp />
//         }
//         return null;
//     }
// }

export default function App() {
    return (
        // <HashRouter></HashRouter>
        // <BrowserRouter></BrowserRouter>
        <Router>
            <Switch>
                <Route component={C} />
                <Route path="/a" component={A} />
                <Route path="/a/b" component={B} />
                {/* <Route component={C} /> */}
            </Switch>
        </Router>
    )
}
