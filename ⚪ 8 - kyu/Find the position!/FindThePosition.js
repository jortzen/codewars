const position = (letter) =>
    `Position of alphabet: ${letter.charCodeAt(0) - 96}`;

const findLetterPosition = (letter) =>
    `Position of alphabet: ${
        [..."abcdefghijklmnopqrstuvwxyz"].indexOf(letter) + 1
    }`;

const getAlphabetPosition = (letter) =>
    `Position of alphabet: ${letter.charCodeAt() - "a".charCodeAt() + 1}`;