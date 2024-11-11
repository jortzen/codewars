const countBits = (n) =>
    n
        .toString(2)
        .split("")
        .filter((bit) => bit === "1").length;

const countBitsRegex = (n) => (n.toString(2).match(/1/g) || []).length;

const countBitsReduce = (n) =>
    n
        .toString(2)
        .split("")
        .reduce((acc, bit) => acc + (bit === "1" ? 1 : 0), 0);