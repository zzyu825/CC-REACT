import React from 'react'

export default function Comp(props) {

    console.log(props);
    
    return (
        <div>
            {/* {props.children} */}
            {props.children || <h2>默认元素内容</h2>}
            {props.content1}
            {props.content2}
            <h2>自身内容</h2>
        </div>
    )
}
