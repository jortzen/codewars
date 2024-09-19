const max = (input) => Math.max(...input);
const min = (input) => Math.min(...input);

const getMaximum = (input) =>
    input.reduce((max, n) => (n > max ? n : max), input[0]);
const getMinimum = (input) =>
    input.reduce((min, n) => (n < min ? n : min), input[0]);

const largestNumber = (input) => input.reduce((a, b) => (a > b ? a : b));
const smallestNumber = (input) => input.reduce((a, b) => (a < b ? a : b));

const maxValue = (input) => input.sort((a, b) => b - a)[0];
const minValue = (input) => input.sort((a, b) => a - b)[0];