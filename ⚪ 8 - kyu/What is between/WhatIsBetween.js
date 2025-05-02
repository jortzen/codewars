const between = (a, b) => {
    let array = [];

    for (let i = a; i <= b; i++) {
        array.push(i);
    }

    return array;
};

const rangeInclusive = (a, b) =>
    Array.from({ length: b - a + 1 }, (_, i) => a + i);

const buildRange = (a, b) => {
    if (a > b) return [];
    return [a, ...buildRange(a + 1, b)];
};