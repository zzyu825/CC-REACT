import React from 'react';
import useAllStudents from './myHooks/usePageStudents'

function Test() {

    const [page, setPage] = useState(1);
    const resp = useAllStudents(page, 1);
    if (resp) {
        const stusArr = resp.findByPage.map(it => <li key={it.id}>{it.name}</li>)

        return (
            <div>
                <h1>数据总数：{resp.cont}</h1>
                <ul>
                    {stusArr}
                </ul>
                <input type="number" value={page} onChange={e => {
                    setPage(e.target.value)
                }}/>
            </div>
        )
    }
    return null;
}

export default function App() {
    return (
        <div>
            <Test />
        </div>
    )
}
