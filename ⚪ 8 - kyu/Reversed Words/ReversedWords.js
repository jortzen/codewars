const reverseSentence = (str) => str.split(" ").reverse().join(" ");

const reverseWordsInSentence = (str) => {
    let words = str.split(" ");
    let result = "";

    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i] + (i > 0 ? " " : "");
    }

    return result;
};

const reverseWordsWithReduce = (str) =>
    str
        .split(" ")
        .reduce((rev, word) => word + " " + rev, "")
        .trim();