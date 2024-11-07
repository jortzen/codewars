const stray = (numbers) => numbers.reduce((acc, num) => acc ^ num);

const findUniqueFilter = (numbers) => {
    return numbers.filter(
        (num) => numbers.indexOf(num) === numbers.lastIndexOf(num)
    )[0];
};

const findStraySet = (numbers) => {
    const unique = new Set(numbers);

    for (let num of unique) {
        if (numbers.indexOf(num) === numbers.lastIndexOf(num)) return num;
    }
};
