const duplicateEncode = (word) => {
    const lower = word.toLowerCase();
    const charMap = new Map();

    for (const char of lower) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    return [...lower]
        .map((char) => (charMap.get(char) > 1 ? ")" : "("))
        .join("");
};

const encodeUsingObject = (word) => {
    const lower = word.toLowerCase();
    const freq = {};

    for (const char of lower) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return lower
        .split("")
        .map((char) => (freq[char] > 1 ? ")" : "("))
        .join("");
};

const encodeUsingFilter = (word) => {
    const lower = word.toLowerCase();

    return lower
        .split("")
        .map((char) =>
            lower.split("").filter((c) => c === char).length > 1 ? ")" : "("
        )
        .join("");
};

const encodeUsingReduce = (word) => {
    const lower = word.toLowerCase();

    const freq = lower.split("").reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    return lower
        .split("")
        .map((char) => (freq[char] > 1 ? ")" : "("))
        .join("");
};
