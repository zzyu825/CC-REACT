import React, { Component } from 'react'
import Student from './Student'

export default class AllStudents extends Component {
    render() {
        // 约定：props.stu传递的是学生的数组
        // 获取组件数组
        const studentsArr = this.props.stu.map(item => <Student key={item.id} {...item} />);
        return (
            <ul>
                {studentsArr}
            </ul>
        )
    }
}
