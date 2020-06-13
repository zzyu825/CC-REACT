import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

const AWrapper = withRouter(A);

function News(props) {
    return (
        <div>
            <h1>新闻列表</h1>
            {/* <A history={props.history}/> */}
            <AWrapper/>
        </div>
    )
}

function A({history}) {
    // console.log(props);
    console.log(history);
    return (
        <button onClick={() => {
            history.push('/')
        }}>点击返回</button>
    )
}

function Index() {
    return <h1>首页</h1>
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
                <Route path="/news" component={News} />
                <Route path="/" component={Index} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
