const makeNegative = (num) => {
    return -Math.abs(num);
};

const ensureNegative = (num) => {
    return num > 0 ? -num : num;
};

const negativeByMinZero = (num) => {
    return Math.min(num, -Math.abs(num));
};