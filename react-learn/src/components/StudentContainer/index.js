import React, {useState, useEffect} from 'react';
import StudentList from '../StudentList';
import { getStudent } from '../../services/student'
import Pager from '../common/Pager'

/**
 * 用于提供数据，以及控制数据的变化
 */
export default function StudentContainer() {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(1);
    const [students, setStudents] = useState([]);
    const [total, setTotal] = useState(0);
    const [panelNum, setPanelNum] = useState(5);

    // 当页码和页容量发生变化时，将重新获取数据
    useEffect(() => {
        (async function() {
            const resp = await getStudent(page, limit);
            setStudents(resp.findByPage); // 设置学生数组
            setTotal(resp.cont); // 设置学生总数
        })();
    }, [page, limit]);

    return (
        <div>
            <StudentList stus={students} />
            <Pager
                current={page}
                total={total}
                limit={limit}
                panelNumber={panelNum}
                onPageChange={newPage => {
                    setPage(newPage)
                }}
            />
            <p>
                每页显示的条数：
                <input type="number" value={limit} onChange={e => {
                    setLimit(parseInt(e.target.value))
                }}/>
            </p>
            <p>
                每页显示的数字页码：
                <input type="number" value={panelNum} onChange={e => {
                    setPanelNum(parseInt(e.target.value))
                }}/>
            </p>
        </div>
    )
}
