const digitize = (n) => {
    return n.toString().split("").reverse().map(Number);
};

const reverseDigits = (n) => {
    return Array.from(String(n), Number).reverse();
};

const getReversedDigits = (num) => {
    return [...num.toString()].map(Number).reverse();
};