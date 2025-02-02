const numberOfPairs = (gloves) =>
    [...new Set(gloves)].reduce(
        (pairs, color) =>
            pairs + Math.floor(gloves.filter((g) => g === color).length / 2),
        0
    );

const countGlovePairs = (gloves) => {
    const colorCount = gloves.reduce(
        (acc, color) => ((acc[color] = (acc[color] || 0) + 1), acc),
        {}
    );
    return Object.values(colorCount).reduce(
        (pairs, count) => pairs + Math.floor(count / 2),
        0
    );
};

const glovePairCalculator = (gloves) => {
    const counts = {};
    let pairs = 0;

    gloves.forEach((color) => {
        counts[color] = (counts[color] || 0) + 1;
        if (counts[color] % 2 === 0) pairs++;
    });

    return pairs;
};