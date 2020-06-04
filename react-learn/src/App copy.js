import React from 'react';
import useAllStudents from './myHooks/useAllStudents';

function Test() {

    const stus = useAllStudents();
    const stusArr = stus.map(it => <li key={it.id}>{it.name}</li>)

    return (
        <ul>
            {stusArr}
        </ul>
    )
}

export default function App() {
    return (
        <div>
            <Test />
        </div>
    )
}
