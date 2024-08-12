const findUniq = (arr) => {
    return arr.find((value) => arr.indexOf(value) === arr.lastIndexOf(value));
};

const singleOccurrence = (arr) => {
    return arr.reduce((unique, current) => {
        return arr.indexOf(current) === arr.lastIndexOf(current)
            ? current
            : unique;
    }, null);
};

const findUnifindUniqqueElement = (arr) => {
    const countMap = new Map();

    arr.forEach((element) => {
        countMap.set(element, (countMap.get(element) || 0) + 1);
    });

    for (let [key, value] of countMap) {
        if (value === 1) {
            return key;
        }
    }
};