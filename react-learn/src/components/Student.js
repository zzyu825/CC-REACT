import React from 'react'

export default function Student({name, sex, address}) {
    return (
        <li>
            【姓名】{name}
            【性别】{sex ? '男' : '女'}
            【地址】{address}
        </li>
    )
}
