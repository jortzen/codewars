const sumArrays = (arr1, arr2) =>
    arr1.reduce((acc, curr) => acc + curr, 0) +
    arr2.reduce((acc, curr) => acc + curr, 0);

const combineArraySum = (arr1, arr2) => {
    return [...arr1, ...arr2].reduce((sum, num) => sum + num, 0);
};

const mergeAndSum = (arr1, arr2) => {
    return arr1.concat(arr2).reduce((total, num) => total + num, 0);
};