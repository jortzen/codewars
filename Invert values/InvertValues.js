const invert = (array) => {
    return array.map((num) => -num);
};

const invertNumbers = (numbers) => {
    const result = [];

    numbers.forEach((num) => result.push(-num));

    return result;
};

const negateArrayElements = (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(-arr[i]);
    }
    return result;
};