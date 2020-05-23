export function ObjectEqual(obj1, obj2) {
    // 浅比较
    for (const key in obj1) {
        if (!Object.is(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}