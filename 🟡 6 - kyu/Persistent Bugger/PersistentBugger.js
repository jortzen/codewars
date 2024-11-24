const persistence = (num) => {
    return num < 10
        ? 0
        : 1 + persistence([...`${num}`].reduce((acc, digit) => acc * digit, 1));
};

const persistenceIterative = (num) => {
    let count = 0;

    while (num >= 10) {
        num = [...`${num}`].reduce((acc, digit) => acc * digit, 1);
        count++;
    }

    return count;
};

const persistenceHelper = (num) => {
    const multiplyDigits = (n) =>
        [...`${n}`].reduce((acc, digit) => acc * digit, 1);
    let count = 0;

    while (num >= 10) {
        num = multiplyDigits(num);
        count++;
    }

    return count;
};

const persistenceReduce = (num) => {
    let count = 0;
    
    while (num >= 10) {
        num = num
            .toString()
            .split("")
            .reduce((acc, digit) => acc * Number(digit), 1);
        count++;
    }

    return count;
};
