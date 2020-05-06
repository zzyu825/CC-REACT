import React from 'react';
import Student from './Student';

export default function StudentList({studentList}) {
    const arr = studentList.map((item, i) => <Student {...item} key={item.id}/>);
    return (
        <ul>
            {arr}
        </ul>
    )
}
