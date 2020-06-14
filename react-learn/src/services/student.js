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

/**
 * 如果传递了key属性（key有值），则按照关键字和性别进行搜索
 * 如果key没有值，则对所有学生进行分页查询
 * @export
 * @param {*} [{
 *     page = 1, 
 *     limit = 10,
 *     sex = -1,
 *     key = ''
 * }={}]
 * @returns
 */
export async function getStudentSearch({
    page = 1, 
    limit = 10,
    sex = -1,
    key = ''
} = {}) {
    if (key) {
        // 通过关键字分页查询
        const resp =  await fetch(`/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&sex=${sex}&search=${key}`)
            .then(resp => resp.json() ).then(resp => resp.data );
        resp.datas = resp.searchList;
        delete resp.searchList;
        return resp;
    } else {
        // 忽略性别，分页查询
        const resp =  await getStudent(page, limit);
        resp.datas = resp.findByPage;
        delete resp.findByPage;
        return resp;
    }
}