const findNeedle = (haystack) =>
    `found the needle at position ${haystack.indexOf("needle")}`;

const locateNeedle = (haystack) =>
    `found the needle at position ${haystack.findIndex(
        (item) => item === "needle"
    )}`;

const needleFinder = (haystack) => {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle")
            return `found the needle at position ${i}`;
    }
};