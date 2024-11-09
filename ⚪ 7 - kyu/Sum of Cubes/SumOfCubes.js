const sumCubes = (n) => {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i ** 3;
    }

    return sum;
};

const sumCubesReduce = (n) =>
    Array.from({ length: n }, (_, i) => (i + 1) ** 3).reduce(
        (acc, val) => acc + val,
        0
    );

const sumCubesFormula = (n) => ((n * (n + 1)) / 2) ** 2;

const sumCubesRecursion = (n) =>
    n === 1 ? 1 : n ** 3 + sumCubesRecursion(n - 1);