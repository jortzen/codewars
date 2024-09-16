const minMax = (arr) => {
    return [Math.min(...arr), Math.max(...arr)];
};

const minMaxFinder = (arr) => {
    let min = arr[0];
    let max = arr[0];

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < min) {
            min = arr[index];
        }
        if (arr[index] > max) {
            max = arr[index];
        }
    }

    return [min, max];
};

const getMinMax = (arr) => {
    return arr.reduce(
        (acc, num) => [Math.min(acc[0], num), Math.max(acc[1], num)],
        [arr[0], arr[0]]
    );
};