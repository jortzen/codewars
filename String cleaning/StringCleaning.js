const stringClean = (s) => {
    return s.replace(/\d/g, "");
};

const stripNumbers = (s) => s.split("").map((char) => (/\d/.test(char) ? "" : char)).join("");

const reverseCleanString = (s) => {
    return s.split('').reduceRight((acc, char) => (!/\d/.test(char) ? char + acc : acc), '');
};