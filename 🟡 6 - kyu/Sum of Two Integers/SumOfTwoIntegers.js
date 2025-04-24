const add = (x, y) => {
    while (y !== 0) {
        const carry = x & y;
        x = x ^ y;
        y = carry << 1;
    }
    return x;
};

const addTwoIntegers = (x, y) => (y === 0 ? x : addTwoIntegers(x ^ y, (x & y) << 1));