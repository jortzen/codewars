const incrementString = (strng) => {
    return strng.replace(/(\d*)$/, (match) => {
        if (match === "") return "1";

        const length = match.length;
        const incremented = (parseInt(match, 10) + 1).toString();

        return incremented.padStart(length, "0");
    });
};

const incrementSplit = (strng) => {
    const numPart = strng.match(/\d+$/) || [""];
    const textPart = strng.slice(0, strng.length - numPart[0].length);

    if (numPart[0] === "") return `${textPart}1`;

    const incremented = (parseInt(numPart[0], 10) + 1).toString();

    return `${textPart}${incremented.padStart(numPart[0].length, "0")}`;
};

const incrementDestructure = (strng) => {
    const [_, textPart, numPart] = strng.match(/^(.*?)(\d*)$/) || [
        "",
        strng,
        "",
    ];

    if (!numPart) return `${textPart}1`;
    const incremented = (parseInt(numPart, 10) + 1).toString();

    return `${textPart}${incremented.padStart(numPart.length, "0")}`;
};