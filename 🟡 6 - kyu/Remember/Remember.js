const remember = (str) => {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== i && !result.includes(str[i])) {
            result.push(str[i]);
        }
    }
    return result;
};

const rememberMap = (str) => {
    const map = new Map();
    const result = [];
    for (const c of str) {
        if (map.has(c)) {
            if (map.get(c) === 1) result.push(c);
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    }
    return result;
};

const rememberReduce = (str) => {
    const seen = new Set();
    return [...str].reduce(
        (res, c) =>
            seen.has(c) && !res.includes(c) ? [...res, c] : (seen.add(c), res),
        []
    );
};