const stringy = (size) =>
    Array.from({ length: size }, (_, i) => (i % 2 === 0 ? "1" : "0")).join("");

const stringyLoop = (size) => {
    let result = "";
    for (let i = 0; i < size; i++) {
        result += i % 2 === 0 ? "1" : "0";
    }
    return result;
};

const stringyRepeat = (size) =>
    "10".repeat(Math.ceil(size / 2)).substring(0, size);

const stringyRecursive = (size) =>
    size === 1
        ? "1"
        : stringyRecursive(size - 1) + (size % 2 === 0 ? "0" : "1");