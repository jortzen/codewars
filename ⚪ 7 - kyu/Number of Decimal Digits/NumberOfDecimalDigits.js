const digits = (n) => n.toString().length;

const countDigits = (n) => {
    return `${n}`.length;
};

const countDigitsIterative = (n) => {
    if (n === 0) return 1;
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    
    return count;
};
