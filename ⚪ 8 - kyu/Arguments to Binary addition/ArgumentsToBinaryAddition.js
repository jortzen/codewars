const arr2bin = (arr) => {
    const sum = arr.reduce((total, item) => {
        return typeof item === "number" ? total + item : total;
    }, 0);

    return sum.toString(2);
};

const toBinarySum = (arr) => {
    const sum = arr
        .filter((item) => typeof item === "number")
        .reduce((acc, num) => acc + num, 0);

    return sum.toString(2);
};

const sumArrayToBinary = (arr) => {
    let sum = 0;

    for (const item of arr) {
        if (typeof item === "number") {
            sum += item;
        }
    }

    return sum.toString(2);
};

const convertArraySumToBinary = (arr) => {
    let totalSum = 0;

    arr.forEach((item) => {
        if (typeof item === "number") {
            totalSum += item;
        }
    });

    return totalSum.toString(2);
};