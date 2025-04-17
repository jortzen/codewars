const extend = (...args) => {
    const result = {};
    for (const obj of args) {
        if (!isObject(obj)) continue;
        for (const key in obj) {
            if (!(key in result)) {
                result[key] = obj[key];
            }
        }
    }
    return result;
};

const collectUniqueProps = (...args) =>
    args.reduce((acc, curr) => {
        if (!isObject(curr)) return acc;
        for (const [key, value] of Object.entries(curr)) {
            if (!(key in acc)) acc[key] = value;
        }
        return acc;
    }, {});

const extendOnce = (...args) => {
    const result = {};
    args.filter(isObject).forEach((obj) => {
        Object.keys(obj).forEach((key) => {
            if (!(key in result)) result[key] = obj[key];
        });
    });
    return result;
};