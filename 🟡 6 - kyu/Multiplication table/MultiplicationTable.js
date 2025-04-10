const multiplicationTable = (size) => {
    const result = [];
    for (let i = 1; i <= size; i++) {
        const row = [];
        for (let j = 1; j <= size; j++) {
            row.push(i * j);
        }
        result.push(row);
    }
    return result;
};

const multiplicationMatrix = (n) => {
    return Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => (i + 1) * (j + 1))
    );
};

const generateMultiplicationTable = (size) =>
    [...Array(size)].map((_, i) =>
        [...Array(size)].map((_, j) => (i + 1) * (j + 1))
    );