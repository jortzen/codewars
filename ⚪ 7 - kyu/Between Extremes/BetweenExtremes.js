const betweenExtremes = (numbers) =>
    Math.max(...numbers) - Math.min(...numbers);

const betweenExtremesWithMap = (numbers) => {
    let max = numbers.map(Number).reduce((a, b) => (a > b ? a : b));
    let min = numbers.map(Number).reduce((a, b) => (a < b ? a : b));

    return max - min;
};

const betweenExtremesWithSort = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0];
};