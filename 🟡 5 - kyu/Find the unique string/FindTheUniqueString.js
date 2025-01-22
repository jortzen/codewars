const findUniq = (arr) => {
    const normalize = (str) =>
        [...new Set(str.toLowerCase().replace(/\s+/g, ""))].sort().join("");

    const [first, second, ...rest] = arr.map(normalize);

    const unique =
        first === second
            ? rest.find((r) => r !== first)
            : first === rest[0]
            ? second
            : first;

    return arr.find((str) => normalize(str) === unique);
};

const findUniqBySet = (arr) => {
    const normalize = (str) =>
        [...new Set(str.toLowerCase().replace(/\s+/g, ""))].sort().join("");

    const uniquePatterns = arr.map(normalize);
    const uniqueMap = uniquePatterns.reduce((map, pattern) => {
        map[pattern] = (map[pattern] || 0) + 1;
        return map;
    }, {});

    const uniquePattern = Object.keys(uniqueMap).find(
        (key) => uniqueMap[key] === 1
    );

    return arr.find((str) => normalize(str) === uniquePattern);
};