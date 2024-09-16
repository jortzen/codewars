const solution = (string) => {
    return string.replace(/([A-Z])/g, " $1");
};

const solutionMap = (string) => {
    return string
        .split("")
        .map((char) => (char === char.toUpperCase() ? ` ${char}` : char))
        .join("");
};

const solutionFor = (string) => {
    let result = "";

    for (let index = 0; index < string.length; index++) {
        result +=
            string[index] === string[index].toUpperCase()
                ? ` ${string[index]}`
                : string[index];
    }

    return result;
};

const solutionForEach = (string) => {
    let result = "";

    [...string].forEach((char) => {
        result += char === char.toUpperCase() ? ` ${char}` : char;
    });

    return result;
};
