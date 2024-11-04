const powersOfTwo = (n) => Array.from({ length: n + 1 }, (_, i) => 2 ** i);

const getPowersOfTwo = (n) => [...Array(n + 1)].map((_, i) => 2 ** i);

const generatePowersOfTwo = (n) => {
    let result = [];

    for (let i = 0; i <= n; i++) {
        result.push(2 ** i);
    }

    return result;
};

const listPowersOfTwo = (n) => {
    return Array(n + 1)
        .fill(2)
        .map((base, exp) => base ** exp);
};