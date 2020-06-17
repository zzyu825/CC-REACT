import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function User({match}) {
    console.log(match);
    return (
        <div>
            <h1>User组件固定的区域</h1>
            <p>
                {/* <Link to="/user/update">用户信息</Link>
                <Link to="/user/pay">充值</Link> */}
                <Link to={`${match.url}/update`}>用户信息</Link>
                <Link to={`${match.url}/pay`}>充值</Link>
            </p>
            <div style={{
                width: 500,
                height: 500,
                background: "lightblue",
                border: "2px solid",
                margin: "0 auto"
            }}>
                {/* <Route path="/user/update" component={UserUpdate} />
                <Route path="/user/pay" component={UserPay} /> */}
                <Route path={`${match.url}/update`} component={UserUpdate} />
                <Route path={`${match.url}/pay`} component={UserPay} />
            </div>
        </div>
    )
}

function UserUpdate() {
    return <h1>修改用户信息</h1>
}

function UserPay() {
    return <h1>用户充值</h1>
}

export default function App() {
    return (
        <Router>
            <Route path="/user" component={User} />
            {/* 其他组件 */}
        </Router>
    )
}
