const duplicateCount = (text) => {
    const lower = text.toLowerCase();
    const charMap = new Map();
    let count = 0;

    for (const char of lower) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    charMap.forEach((value) => {
        if (value > 1) count++;
    });

    return count;
};

const countDuplicatesSetFilter = (text) => {
    const lower = text.toLowerCase();

    return [...new Set(lower)].filter(
        (char) => lower.split(char).length - 1 > 1
    ).length;
};

const countDuplicatesReduce = (text) => {
    const lower = text.toLowerCase();
    const freq = lower.split("").reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    return Object.values(freq).filter((count) => count > 1).length;
};

const countDuplicatesForLoop = (text) => {
    const lower = text.toLowerCase();
    const charCount = {};
    let duplicates = 0;

    for (const char of lower) {
        if (charCount[char]) {
            if (charCount[char] === 1) duplicates++;
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return duplicates;
};
