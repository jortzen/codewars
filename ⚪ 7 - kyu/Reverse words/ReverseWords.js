const reverseWords = (str) =>
    str
        .split(" ")
        .map((word) => [...word].reverse().join(""))
        .join(" ");

const flipWords = (str) => {
    const words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = [...words[i]].reverse().join("");
    }

    return words.join(" ");
};

const reverseWithReduce = (str) =>
    str
        .split(" ")
        .reduce(
            (reversed, word) => [...reversed, [...word].reverse().join("")],
            []
        )
        .join(" ");