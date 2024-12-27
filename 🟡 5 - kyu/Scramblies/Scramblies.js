const scramble = (str1, str2) => {
    const count = {};

    for (const char of str1) count[char] = (count[char] || 0) + 1;
    for (const char of str2) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
};

const canRearrangeWithMap = (str1, str2) => {
    const charMap = new Map();

    for (let char of str1) charMap.set(char, (charMap.get(char) || 0) + 1);
    for (let char of str2) {
        if (!charMap.get(char)) return false;
        charMap.set(char, charMap.get(char) - 1);
    }

    return true;
};

const canRearrangeFilter = (str1, str2) => {
    const count = str1.split("").reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    return str2.split("").every((char) => count[char]-- > 0);
};