const pigIt = (str) =>
    str
        .split(" ")
        .map((word) =>
            /^[a-zA-Z]+$/.test(word) ? word.slice(1) + word[0] + "ay" : word
        )
        .join(" ");

const pigItForEach = (str) => {
    const result = [];

    str.split(" ").forEach((word) => {
        result.push(
            /^[a-zA-Z]+$/.test(word) ? word.slice(1) + word[0] + "ay" : word
        );
    });

    return result.join(" ");
};

const pigItReplace = (str) =>
    str.replace(/\b(\w)(\w*)\b/g, (_, first, rest) => rest + first + "ay");

const pigItReduce = (str) =>
    str
        .split(" ")
        .reduce(
            (acc, word) =>
                acc +
                (acc ? " " : "") +
                (/^[a-zA-Z]+$/.test(word)
                    ? word.slice(1) + word[0] + "ay"
                    : word),
            ""
        );