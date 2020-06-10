import React from 'react';
import { HashRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// /a
function A() {
    return <span>组件A</span>
}

// /b
function B() {
    return <h1>
        组件B
        <Route path="/b" component={A} />
    </h1>
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
                <Route path="/a" exact component={A}>
                    {/* <h1 style={{ color: "red" }}>
                        必定会看到的内容
                    </h1> */}
                    {() => {
                        return <div>
                            <h1 style={{ color: "red" }}>必定会看到的内容</h1>
                            <p>adfasdfasdf</p>
                        </div>
                    }}
                </Route>
                <Route path="/b" component={B} />
                <Route component={C} />
            </Switch>
        </Router>
    )
}
