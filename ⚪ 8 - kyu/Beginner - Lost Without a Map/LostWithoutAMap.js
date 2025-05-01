const maps = (x) => {
    return x.map((number) => number * 2);
};

const doubleValues = (x) => {
    const result = [];
    for (let i = 0; i < x.length; i++) {
        result.push(x[i] * 2);
    }
    return result;
};

const doubleList = (x) => {
    return x.reduce((acc, val) => {
        acc.push(val * 2);
        return acc;
    }, []);
};