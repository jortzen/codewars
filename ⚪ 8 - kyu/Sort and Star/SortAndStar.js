const twoSort = (s) => s.sort()[0].split("").join("***");

const decorateFirstWord = (s) =>
    [...s.sort()[0]].reduce((a, c) => a + "***" + c);

const starifyFirstString = (s) =>
    s
        .sort()[0]
        .split("")
        .map((c) => `${c}***`)
        .join("")
        .slice(0, -3);