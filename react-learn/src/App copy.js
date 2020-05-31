import React, { useState, useEffect } from 'react'


export default function App() {
    
    const [n, setN] = useState(0);
    // 以下代码属于副作用
    // document.title = `计数器：${n}`

    useEffect(() => {
        console.log("更改页面标题的副作用操作");
        document.title = `计数器：${n}`
    })
    useEffect(() => {
        console.log("其他的副作用操作")
    })

    return (<div>
        <span>{n}</span>
        <button onClick={() => {
            setN(prevN => prevN + 1);
        }}>+</button>
    </div>)
}
