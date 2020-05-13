import React from 'react'

export default function FuncDefault(props) {
    console.log(props); // 已经完成了混合
    return (
        <div>
            a:{props.a}b:{props.b}
        </div>
    )
}

FuncDefault.defaultProps = {
    a: 123
}
