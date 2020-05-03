import React from 'react'

export default function MyFuncComp(props) {
    // console.log(props);
    // props.number = 456;
    return <h1>函数组件的内容，传入的属性：{props.number}</h1>
}