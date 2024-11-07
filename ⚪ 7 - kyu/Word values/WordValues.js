const wordValue = (a) => {
    return a.map(
        (word, i) =>
            word
                .replace(/\s/g, "")
                .split("")
                .reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0) *
            (i + 1)
    );
};

const wordValueForEach = (a) => {
    const result = [];

    a.forEach((word, index) => {
        const value = word
            .replace(/\s/g, "")
            .split("")
            .reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
        result.push(value * (index + 1));
    });

    return result;
};

const wordValueNestedLoop = (a) => {
    return a.map((word, i) => {
        let sum = 0;
        for (const char of word) {
            if (char !== " ") {
                sum += char.charCodeAt(0) - 96;
            }
        }
        return sum * (i + 1);
    });
};