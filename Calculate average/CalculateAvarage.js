const findAverage = (array) => {
    return array.length === 0
        ? 0
        : array.reduce((acc, num) => acc + num, 0) / array.length;
};

const findAverageForOf = (array) => {
    if (array.length === 0) return 0;

    let sum = 0;

    for (const num of array) {
        sum += num;
    }

    return sum / array.length;
};

const findAverageForEach = (array) => {
    if (array.length === 0) return 0;

    let sum = 0;

    array.forEach((num) => (sum += num));

    return sum / array.length;
};