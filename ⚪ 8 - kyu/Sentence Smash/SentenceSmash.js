const smash = (words) => words.join(" ");

const sentenceFromWords = (words) =>
    words.reduce((sentence, word) => `${sentence} ${word}`.trim());

const buildSentence = (words) => (words.length > 0 ? words.join(" ") : "");

const concatWords = (words) =>
    words.reduce(
        (sentence, word) => sentence + (sentence ? " " : "") + word,
        ""
    );