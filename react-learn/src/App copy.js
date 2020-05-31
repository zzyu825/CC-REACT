import React, { PureComponent, useState } from 'react'

// export default class App extends PureComponent {

//     constructor(props) {
//         super(props);
//         this.state = { n: 0 }
//     }

//     render() {
        // return (
        //     <div>
        //         <button onClick={() => {
        //             this.setState({
        //                 n: this.state.n - 1
        //             })
        //         }}>-</button>
        //         <span>{ this.state.n }</span>
        //         <button onClick={() => {
        //             this.setState({
        //                 n: this.state.n + 1
        //             })
        //         }}>+</button>
        //     </div>
        // )
//     }
// }

export default function App() {

    // const arr = useState(0);
    // const n = arr[0];
    // const setN = arr[1];

    const [n, setN] = useState(0)

    return (
        <div>
            <button onClick={() => {
                setN(n - 1)
            }}>-</button>
            <span>{ n }</span>
            <button onClick={() => {
                setN(n + 1)
            }}>+</button>
        </div>
    )
}

