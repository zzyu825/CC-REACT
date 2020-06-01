import React from 'react';
import ProtoTypes from 'prop-types'

/**
 * 学生列表的组件，纯展示组件，没有状态，从属性中获取数据用于显示
 */
export default function StudentList({stus}) {

    const stuArr = stus.map(it => (<li key={it.id}>
        <span>{it.name}，</span>
        <span>{it.sex === 1 ? "男" : "女"}</span>
    </li>));

    return (
        <ul>
            {stuArr}
        </ul>
    )
}

StudentList.defaultProps = {
    stus: []
};

StudentList.protoTypes = {
    stus: ProtoTypes.array.isRequired
}
