const getMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];

const getMinMaxReduce = (arr) =>
    arr.reduce(
        ([min, max], num) => [Math.min(min, num), Math.max(max, num)],
        [arr[0], arr[0]]
    );

const minMaxWithForLoop = (arr) => {
    let min = arr[0];
    let max = arr[0];

    for (const num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    return [min, max];
};