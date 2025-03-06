const capitals = (word) =>
    [...word]
        .map((c, i) => (c === c.toUpperCase() ? i : -1))
        .filter((i) => i !== -1);

const capitalIndices = (word) =>
    [...word].reduce(
        (acc, c, i) => (c === c.toUpperCase() ? [...acc, i] : acc),
        []
    );

const getCapitalIndexes = (word) => {
    const indices = [];
    [...word].forEach((c, i) => {
        if (c === c.toUpperCase()) indices.push(i);
    });
    return indices;
};