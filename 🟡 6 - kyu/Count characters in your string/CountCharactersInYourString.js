const count = (string) =>
    string.split("").reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

const countWithLoop = (string) => {
    const result = {};

    for (const char of string) {
        result[char] = (result[char] || 0) + 1;
    }

    return result;
};

const countWithForEach = (string) => {
    const result = {};

    string.split("").forEach((char) => {
        result[char] = (result[char] || 0) + 1;
    });

    return result;
};

const countWithMap = (string) => {
    const result = new Map();

    for (const char of string) {
        result.set(char, (result.get(char) || 0) + 1);
    }

    return Object.fromEntries(result);
};