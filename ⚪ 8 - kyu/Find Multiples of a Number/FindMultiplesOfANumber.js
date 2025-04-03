const getMultiples = (integer, limit) =>
    Array.from(
        { length: Math.floor(limit / integer) },
        (_, i) => (i + 1) * integer
    );

const generateMultiples = (integer, limit) =>
    [...Array(Math.floor(limit / integer))].map((_, i) => (i + 1) * integer);

const findMultiples = (integer, limit) => {
    let result = [];
    for (let i = integer; i <= limit; i += integer) result.push(i);
    return result;
};