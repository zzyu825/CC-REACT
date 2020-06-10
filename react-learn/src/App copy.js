import React from 'react';
import { HashRouter, BrowserRouter as Router, Route } from 'react-router-dom'

// /a
function A() {
    return <h1>组件A</h1>
}

// /b
function B() {
    return <h1>组件B</h1>
}

// /c
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
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
            <Route path="/c" component={C}></Route>
        </Router>
    )
}
