const titleCase = (title, minorWords = "") => {
    const minor = new Set(minorWords.toLowerCase().split(" "));
    return title
        .toLowerCase()
        .split(" ")
        .map((word, i) =>
            i === 0 || !minor.has(word)
                ? word.charAt(0).toUpperCase() + word.slice(1)
                : word
        )
        .join(" ");
};

const titleCaseReduce = (title, minorWords = "") => {
    const minor = new Set(minorWords.toLowerCase().split(" "));

    return title
        .toLowerCase()
        .split(" ")
        .reduce((result, word, i) => {
            const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
            return (
                result +
                (i === 0 || !minor.has(word) ? capitalized : word) +
                " "
            );
        }, "")
        .trim();
};

const titleCaseHelper = (title, minorWords = "") => {
    const minor = new Set(minorWords.toLowerCase().split(" "));
    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    return title
        .toLowerCase()
        .split(" ")
        .map((word, i) =>
            i === 0 || !minor.has(word) ? capitalize(word) : word
        )
        .join(" ");
};

const titleCaseExplicit = (title, minorWords = "") => {
    if (!title) return "";
    const minor = new Set(minorWords.toLowerCase().split(" "));

    return title
        .toLowerCase()
        .split(" ")
        .map((word, i) =>
            i === 0 || !minor.has(word)
                ? word[0].toUpperCase() + word.slice(1)
                : word
        )
        .join(" ");
};