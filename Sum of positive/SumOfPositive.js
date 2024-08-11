const positiveSum = (arr) => {
    return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
};

const positiveSumForEach = (arr) => {
    let sum = 0;

    arr.forEach((num) => {
        if (num > 0) {
            sum += sum;
        }
    });

    return sum;
};

const positiveSumFor = (arr) => {
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            sum += arr[index];
        }
    }

    return sum;
};