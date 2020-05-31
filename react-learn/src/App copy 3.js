import React, { useState, useEffect } from 'react'

window.timer = null;

function stop() {
    clearInterval(window.timer); // 清空之前的计时器
    window.timer = null;
}

/**
 * 一个可移动的块，该组件每次渲染完成后，始终从0，0坐标在10秒钟内，移动到目标点坐标
 * @param {*} props 
 * props.left，要移动到的目标点横坐标
 * props.top，要移动到的目标点纵坐标
 */
function MoveBlock(props) {

    useEffect(() => {
        console.log("副作用操作")
        const div = ref.current;
        let curTimes = 0; // 当前移动的次数
        const disX = props.left / 1000; // 横坐标每次移动的距离
        const disY = props.top / 1000; // 纵坐标每次移动的距离

        window.timer = setInterval(() => {
            curTimes ++;
            div.style.left = disX * curTimes + "px";
            div.style.top = disY * curTimes + "px";
            if (curTimes === 1000) {
                stop();
            }
        }, 10)
        return stop; // 直接使用stop作为清理函数
    }, [props.left, props.top])

    return (<div style={{
        width: "100px",
        height: "100px",
        position: "fixed",
        backgroundColor: "#f40",
        left: 0,
        top: 0
    }}>

    </div>)
}

export default function App() {
    
    const [point, setpoint] = useState({
        x: 0,
        y: 0
    })
    const [visible, setvisible] = useState(true)
    const refX = React.createRef();
    const refY = React.createRef();

    return (<div style={{
        paddingTop: 200
    }}>
        {
            visible && (
                <div>
                    x: <input type="number" ref={refX}/>
                    y: <input type="number" ref={refY}/>
                    <button onClick={e => {
                        setpoint({
                            x: parseInt(refX.current.value),
                            y: parseInt(refY.current.value),
                        })
                    }}>确定</button>
                    <MoveBlock left={point.x} top={point.y}/>
                </div>
            )
        }
        <button onClick={() => {
            setvisible(!visible)
        }}>显示/隐藏</button>
    </div>)
}
