const sumOfSquares = (numbers) =>
    numbers.map((n) => n * n).reduce((acc, cur) => acc + cur, 0);

const squareAndSum = (numbers) => {
    let sum = 0;

    numbers.forEach((n) => (sum += n * n));

    return sum;
};

const loopSquareSum = (numbers) => {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i];
    }

    return sum;
};

const reduceSquareSum = (numbers) => numbers.reduce((acc, n) => acc + n * n, 0);