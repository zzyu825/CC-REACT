import React from 'react';
import './index.css'

export default function StudentTable(props) {
    const trs = props.stus.map(it => <tr key={it.id}>
        <td>{it.sNo}</td>
        <td>{it.name}</td>
        <td>{it.sex === 0 ? '男': '女'}</td>
        <td>{it.birth}</td>
        <td>{it.email}</td>
        <td><a href={`/students/${it.sNo}`}>详情</a></td>
    </tr>)
    return (
        <table className="tab">
            <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>出生年份</th>
                    <th>邮箱</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {trs}
            </tbody>
        </table>
    )
}
