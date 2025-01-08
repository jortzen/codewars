const kebabize = (str) =>
    str
        .replace(/[^a-zA-Z]/g, "")
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "");

const kebabizeSplit = (str) =>
    str
        .replace(/[^a-zA-Z]/g, "")
        .split(/(?=[A-Z])/)
        .join("-")
        .toLowerCase();

const kebabizeIterative = (str) => {
    let result = "";

    for (let char of str.replace(/[^a-zA-Z]/g, "")) {
        result += char === char.toUpperCase() ? `-${char.toLowerCase()}` : char;
    }
    
    return result.startsWith("-") ? result.slice(1) : result;
};
