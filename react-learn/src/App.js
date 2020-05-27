import React from 'react';

let prev;
export default function App() {
    return (
        <div onClick={e => {
            console.log("div被点击了");
            console.log(prev === e)
        }}>
            <button onClick={e => {
                console.log("react的内置dom事件：button被点击了");
                // console.log(e.isPropagationStopped())
                // e.stopPropagation();
                // console.log(e)
                // console.log(e.isPropagationStopped())
                // console.log(e.nativeEvent)
                // e.nativeEvent.stopImmediatePropagation();
                prev = e;
                // e.persist();
                // setTimeout(() => {
                //     console.log(e.type)
                // }, 0)
            }}>按钮</button>
            <input type="text" onFocus={e => {
                console.log("获取焦点")
            }}/>
        </div>
    )
}

// document.querySelector("#root").onclick = e => {
//     console.log("真实的dom元素事件：rootDiv被点击了");
//     // e.stopPropagation();
// }

// document.addEventListener("click", e => {
//     console.log("真实dom：document被点击了")
// })

document.querySelector("#root").onFocus = e => {
    console.log("阻止focus事件冒泡")
    e.stopPropagation();
}
