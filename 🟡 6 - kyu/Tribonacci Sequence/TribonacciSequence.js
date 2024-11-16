const tribonacci = (signature, n) => {
    if (n === 0) return [];

    const result = signature.slice(0, n);

    while (result.length < n) {
        result.push(result.slice(-3).reduce((a, b) => a + b, 0));
    }

    return result;
};

const tribonacciReduce = (signature, n) => {
    if (n === 0) return [];
    if (n < 3) return signature.slice(0, n);

    return Array(n)
        .fill(0)
        .reduce(
            (acc, _, i) => {
                if (i < 3) return acc;
                acc.push(acc[i - 1] + acc[i - 2] + acc[i - 3]);
                return acc;
            },
            [...signature]
        );
};

const tribonacciMap = (signature, n) => {
    if (n === 0) return [];
    if (n < 3) return signature.slice(0, n);
    
    const result = [...signature];

    Array(n - 3)
        .fill(0)
        .map((_, i) => {
            result.push(result[i] + result[i + 1] + result[i + 2]);
        });
    return result;
};
