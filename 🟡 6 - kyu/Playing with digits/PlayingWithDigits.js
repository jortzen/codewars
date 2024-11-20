const digPow = (n, p) => {
    const sum = n
        .toString()
        .split("")
        .reduce((acc, digit, i) => acc + Math.pow(Number(digit), p + i), 0);

    return sum % n === 0 ? sum / n : -1;
};

const digPowLoop = (n, p) => {
    let sum = 0;
    const digits = n.toString().split("");

    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(Number(digits[i]), p + i);
    }

    return sum % n === 0 ? sum / n : -1;
};

const digPowMapReduce = (n, p) => {
    const sum = n
        .toString()
        .split("")
        .map((digit, i) => Math.pow(Number(digit), p + i))
        .reduce((acc, val) => acc + val, 0);

    return sum % n === 0 ? sum / n : -1;
};

const digPowRecursive = (n, p, i = 0, sum = 0) => {
    const digits = n.toString();
    if (i >= digits.length) return sum % n === 0 ? sum / n : -1;
    
    return digPowRecursive(
        n,
        p,
        i + 1,
        sum + Math.pow(Number(digits[i]), p + i)
    );
};
