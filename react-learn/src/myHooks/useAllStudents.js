import { useState, useEffect } from 'react';
import { getStudents } from '../services/student';

/**
 * 当组件首次加载完成后，获取所有学生数据
 */
export default function useAllStudents() {

    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async () => {
            const stus = await getStudents();
            setStudents(stus);
        })();
    }, []);
    
    return students;
}
