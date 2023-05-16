const isObject = <T extends object>(val: any): val is T => {
    if (val === null || typeof val !== 'object' || typeof val === 'function' || typeof val === 'undefined') {
        return false;
    }
    const reqKeyList: (keyof T)[] = Object.keys({} as Required<T>) as (keyof T)[];
    for (const key of reqKeyList) {
        if (!(key in val)) {
            return false;
        }
    }
    return true;
};

export default isObject;