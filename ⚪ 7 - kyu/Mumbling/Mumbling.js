const accum = (s) =>
    s
        .split("")
        .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
        .join("-");

const createAccumPattern = (s) => {
    return s.split("").reduce((acc, char, idx) => {
        return (
            acc +
            (idx > 0 ? "-" : "") +
            char.toUpperCase() +
            char.toLowerCase().repeat(idx)
        );
    }, "");
};

const formattedStringPattern = (s) => {
    const result = [];

    for (let i = 0; i < s.length; i++) {
        result.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
    }
    
    return result.join("-");
};