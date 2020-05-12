const appkey = "zzyu_1564402433694";

/**
 * 获取所有学生
 */
export async function getStudents() {
    return await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json() ).then(resp => resp.data );
}