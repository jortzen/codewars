const mergeArrays = (arr1, arr2) => {
    return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))];
};

const mergeArraysWithArraysFrom = (arr1, arr2) => {
    return Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b);
};

const mergeArraysWithForOf = (arr1, arr2) => {
    const set = new Set();

    for (let num of arr1) set.add(num);
    for (let num of arr2) set.add(num);

    return Array.from(set).sort((a, b) => a - b);
};

const mergeArraysWithForEach = (arr1, arr2) => {
    const set = new Set();

    [arr1, arr2].forEach((arr) => arr.forEach((num) => set.add(num)));

    return [...set].sort((a, b) => a - b);
};