const solution = (str) => {
    return str.split("").reverse().join("");
};

const solutionSpread = (str) => {
    return [...str].reverse().join("");
};

const reverseWithArrayFrom = (str) => {
    return Array.from(str).reverse().join("");
};