const multiplesOfX = (x, n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }

    return result;
};

const findMultiples = (x, n) => {
    return Array.from({ length: n }).reduce((acc, _, i) => {
        acc.push(x * (i + 1));
        return acc;
    }, []);
};

const generateMultiplesWithFill = (x, n) => {
    return Array(n)
        .fill(0)
        .map((_, index) => x * (index + 1));
};