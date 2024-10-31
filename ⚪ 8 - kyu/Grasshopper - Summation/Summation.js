const summation = (num) => (num * (num + 1)) / 2;

const sumUpTo = (num) => {
    let total = 0;

    for (let i = 1; i <= num; i++) {
        total += i;
    }

    return total;
};

const sumWithReduce = (num) =>
    Array.from({ length: num }, (_, i) => i + 1).reduce(
        (acc, curr) => acc + curr,
        0
    );