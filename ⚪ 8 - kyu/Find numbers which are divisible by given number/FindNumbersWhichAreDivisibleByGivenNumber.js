const divisibleBy = (numbers, divisor) => {
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            result.push(numbers[i]);
        }
    }

    return result;
};

const getDivisibleNumbers = (numbers, divisor) =>
    numbers.filter((num) => num % divisor === 0);

const divisibleByReduce = (numbers, divisor) =>
    numbers.reduce((acc, num) => {
        if (num % divisor === 0) acc.push(num);
        return acc;
    }, []);