const longest = (s1, s2) => {
    return [...new Set(s1 + s2)].sort().join("");
};

const longestFor = (s1, s2) => {
    const combined = s1 + s2;
    const charMap = {};

    let result = "";

    for (let char of combined) {
        if (!charMap[char]) {
            charMap[char] = true;
            result += char;
        }
    }

    return result.split("").sort().join("");
};

const longestFilter = (s1, s2) => {
    const combined = s1 + s2;

    return combined
        .split("")
        .filter((char, index, arr) => arr.indexOf(char) === index)
        .sort()
        .join("");
};