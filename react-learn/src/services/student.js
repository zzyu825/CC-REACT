const appkey = "zzyu_1564402433694";

/**
 * 获取所有学生
 */
export async function getStudents() {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json() ).then(resp => resp.data );
}

/**
 * 通过分页获取学生
 */
export async function getStudent(page = 1, limit = 10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json() ).then(resp => resp.data );
}