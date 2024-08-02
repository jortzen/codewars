const evenNumbers = (array, number) => {
    return array.filter((n) => n % 2 === 0).slice(-number);
};

const evenNumbersSplice = (array, number) => {
    const evens = array.filter((n) => n % 2 === 0);
    const start = evens.length - number;
    return evens.splice(start, number);
};

const evenNumbersForEach = (array, number) => {
    const evens = [];
    array.forEach((n) => {
        if (n % 2 === 0) {
            evens.push(n);
        }

        if (evens.length > number) {
            evens.shift();
        }
    });

    return evens;
};

const evenNumbersReverse = (array, number) => {
    const evens = array.filter((n) => n % 2 === 0).reverse();
    return evens.slice(0, number).reverse();
}