const alphabetPosition = (text) => {
    return text
        .split("")
        .filter((char) => /[a-zA-Z]/.test(char))
        .map((char) => {
            return char.toLowerCase().charCodeAt(0) - 96;
        })
        .join(" ");
};

const alphabetPositionReplace = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z]/g, "")
        .split("")
        .map((char) => {
            return char.charCodeAt(0) - 96;
        })
        .join(" ");
};

const alphabetPositionForEach = (text) => {
    const positions = [];
    text.toLowerCase()
        .split("")
        .forEach((char) => {
            if (/[a-z]/.test(char)) {
                positions.push(char.charCodeAt(0) - 96);
            }
        });
    return positions.join(" ");
};
