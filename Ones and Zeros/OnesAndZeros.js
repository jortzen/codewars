const binaryArrayToNumber = (arr) => {
    return arr.reduce((acc, bit) => (acc << 1) | bit, 0);
};

const binaryArrayToNumberWithJoin = (arr) => {
    return parseInt(arr.join(""), 2);
};

const binaryArrayToNumberWithFor = (arr) => {
    arr.reverse();

    let count = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 1) {
            count += Math.pow(2, index);
        }
    }

    return count;
};