import React from 'react';
import ReactDOM from 'react-dom';
import AllStudents from './AllStudents';

const appkey = "zzyu_1564402433694";

/**
 * 获取所有学生数据
 */
async function fetchAllStudents() {
    const data =  await fetch("http://api.duyiedu.com/api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json()).then(resp => resp.data);
    // console.log(data);
    return data;
}

async function render() {
    ReactDOM.render("正在加载中....", document.getElementById('root'));
    const stu = await fetchAllStudents(); // 获取学生数组
    ReactDOM.render(<AllStudents stu={stu} />, document.getElementById('root'));
}

render();