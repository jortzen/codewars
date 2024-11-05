const fakeBin = (x) =>
    x
        .split("")
        .map((digit) => (digit < "5" ? "0" : "1"))
        .join("");

const convertToBinaryString = (x) =>
    [...x].reduce((acc, digit) => acc + (digit < "5" ? "0" : "1"), "");

const replaceDigits = (x) =>
    x.replace(/\d/g, (digit) => (digit < "5" ? "0" : "1"));

const transformDigits = (x) =>
    Array.from(x, (digit) => (digit < "5" ? "0" : "1")).join("");