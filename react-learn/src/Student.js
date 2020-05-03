import React from 'react'

export default function Student(props) {
    // 假设：每个学生的所有信息，都是分开传递的
    return (
        <li>
            {/* 显示一个学生的所有数据 */}
            {"{"}姓名{"}"}：{props.name}
            【性别】：{props.sex ? '男' : '女'}
            【邮箱】：{props.email}
            【地址】：{props.address}
        </li>
    )
}
