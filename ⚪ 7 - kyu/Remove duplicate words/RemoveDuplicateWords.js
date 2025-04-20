const removeDuplicateWords = (s) => {
    const seen = new Set();
    return s
        .split(" ")
        .filter((word) => (seen.has(word) ? false : seen.add(word)))
        .join(" ");
};

const firstOccurrenceOnly = (s) =>
    s
        .split(" ")
        .filter((word, i, arr) => arr.indexOf(word) === i)
        .join(" ");

const uniqueWordsStream = (s) =>
    s
        .split(" ")
        .reduce((acc, word) => (acc.includes(word) ? acc : [...acc, word]), [])
        .join(" ");