const findSmallestInt = (arr) => {
    return Math.min(...arr);
};

const findSmallestIntFor = (arr) => {
    let min = arr[0];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < min) {
            min = arr[index];
        }
    }

    return min;
};

const findSmallestIntReduce = (arr) => {
    return arr.reduce((min, num) => (num < min ? num : min), arr[0]);
};