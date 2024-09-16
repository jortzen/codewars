const findShort = (s) => {
    return Math.min(...s.split(" ").map((word) => word.length));
};

const getShortestWordLengthWithSort = (str) =>
    str.split(" ").sort((a, b) => a.length - b.length)[0].length;

const lengthOfShortestWord = (str) => 
    str.split(' ').reduce((minLength, word) => Math.min(minLength, word.length), Infinity);