const deleteNth = (arr, n) => {
    let counts = {};
    return arr.filter((num) => (counts[num] = (counts[num] || 0) + 1) <= n);
};

const restrictRepetitions = (arr, n) =>
    arr.reduce(
        (acc, num) =>
            acc.filter((x) => x === num).length < n ? [...acc, num] : acc,
        []
    );

const trimExcessNumbers = (arr, n) => {
    let countMap = new Map();
    return arr.filter((num) => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
        return countMap.get(num) <= n;
    });
};