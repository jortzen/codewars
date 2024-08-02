const oddOrEven = (array) => {
    const sum = array.reduce((acc, value) => acc + value, 0);
    return sum % 2 === 0 ? "even" : "odd";
};

const oddOrEvenFor = (array) => {
    let sum = 0;

    for (const value of array) {
        sum += value;
    }

    return sum % 2 === 0 ? "even" : "odd";
};

const oddOrEvenForEach = (array) => {
    let sum = 0;

    array.forEach((value) => {
        sum += value;
    });

    return sum % 2 === 0 ? "even" : "odd";
};
