const sum = (numbers) => {
    return numbers.reduce((sum, val) => sum + val, 0);
};

const sumWithForLoop = (numbers) => {
    let sum = 0;

    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
    }

    return sum;
};

const sumWithForOf = (numbers) => {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
};