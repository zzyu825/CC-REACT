import React, { Component } from 'react';
import { A, B } from './components/Comps';
import withLog from './HOC/withLog';
import withLogin from './HOC/withLogin';

// let Alog = withLog(A, 'abc');
// Alog = withLogin(Alog);
// let Blog = withLog(B, 'bcd');
// Blog = withLogin(Blog);

const AComp = withLogin(withLog(A, 'abc'));
const BComp = withLogin(withLog(B, 'bcd'));
export default class App extends Component {

    render() {
        // const AComp = withLogin(withLog(A, 'abc'));
        // const BComp = withLogin(withLog(B, 'bcd'));
        return (
            <>
                {/* <Alog a={1} isLogin/>
                <Blog b={2} isLogin/> */}
                <AComp a={1} isLogin/>
                <BComp b={2} isLogin/>
                <button onClick={() => {
                    this.setState({})
                }}>点击</button>
            </>
        )
    }
}

