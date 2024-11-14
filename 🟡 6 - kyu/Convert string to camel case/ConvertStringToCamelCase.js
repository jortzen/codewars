const toCamelCase = (str) =>
    str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());

const transformToCamelCase = (str) =>
    str
        .replace(/([-_][a-z])/gi, (match) => match.charAt(1).toUpperCase())
        .replace(/^([A-Z])/, (match) => match.toLowerCase());

const camelCase = (str) => {
    if (str === "") return str;

    const words = str.split(/[-_]/);

    return words
        .map((word, index) =>
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
};
