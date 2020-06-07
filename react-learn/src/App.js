import React, { useContext } from "react"

const ctx = React.createContext();

// function Test() {
//     return <ctx.Consumer>
//         {val => <h1>上下文的值：{val}</h1>}
//     </ctx.Consumer>
// }

function Test() {
    const val = useContext(ctx);
    return <h1>上下文的值：{val}</h1>
}

export default function App() {
    return (
        <div>
            <ctx.Provider value="abc">
                <Test />
            </ctx.Provider>
        </div>
    )
}
