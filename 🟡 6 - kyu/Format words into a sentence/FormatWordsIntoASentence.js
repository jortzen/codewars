const formatWords = (words) => {
    if (!words || words.length === 0) return "";
    let filtered = words.filter((word) => word);

    return filtered.length > 1
        ? filtered.slice(0, -1).join(", ") + " and " + filtered.slice(-1)
        : filtered.join("");
};

const formatWordsReduce = (words) => {
    if (!words || words.length === 0) return "";
    let filtered = words.filter((word) => word);

    return filtered.reduce(
        (acc, word, index, arr) =>
            index === 0
                ? word
                : index === arr.length - 1
                ? acc + " and " + word
                : acc + ", " + word,
        ""
    );
};

const formatWordsRegex = (words) => {
    if (!words || words.length === 0) return "";

    return words
        .filter((word) => word)
        .join(", ")
        .replace(/,([^,]*)$/, " and$1");
};