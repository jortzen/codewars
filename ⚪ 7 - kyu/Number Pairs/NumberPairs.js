const getLargerNumbers = (a, b) => {
    let result = [];

    for (let index = 0; index < a.length; index++) {
        result.push(Math.max(a[index], b[index]));
    }

    return result;
};

const getLargerNumbersMap = (a, b) => {
    return a.map((num, index) => Math.max(num, b[index]));
};

const getLargerNumbersReduce = (a, b) => {
    return a.reduce((result, num, index) => {
        result.push(Math.max(num, b[index]));
        return result;
    }, []);
};
