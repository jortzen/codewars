const maxSequence = (arr) => {
    let maxSum = 0,
        currentSum = 0;

    for (let num of arr) {
        currentSum = Math.max(0, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

const maxSubSumBrute = (arr) => {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
            currentSum += arr[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};

const maxSubSumReduce = (arr) => {
    let maxSum = 0,
        currentSum = 0;

    arr.reduce((_, num) => {
        currentSum = Math.max(0, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }, 0);

    return maxSum;
};