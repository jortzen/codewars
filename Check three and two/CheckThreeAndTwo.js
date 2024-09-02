const checkThreeAndTwo = (array) => {
    const counts = { a: 0, b: 0, c: 0 };

    for (const char of array) {
        counts[char]++;
    }

    const values = Object.values(counts).sort((a, b) => b - a);

    return values[0] === 3 && values[1] === 2;
};

const checkThreeTwoCombo = (array) => {
    const counts = [...new Set(array)]
        .map((char) => array.filter((c) => c === char).length)
        .sort((a, b) => b - a);

    return counts[0] === 3 && counts[1] === 2;
};

const validateThreeTwoCount = (array) => {
    const counts = array.reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    const values = Object.values(counts).sort((a, b) => b - a);

    return values[0] === 3 && values[1] === 2;
};