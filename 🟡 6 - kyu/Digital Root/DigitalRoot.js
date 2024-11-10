const digitalRoot = (n) => {
    while (n >= 10) {
        n = n
            .toString()
            .split("")
            .reduce((acc, digit) => acc + Number(digit), 0);
    }
    return n;
};

const digitalRootRecursive = (n) => {
    if (n < 10) return n;

    const sum = n
        .toString()
        .split("")
        .reduce((acc, digit) => acc + Number(digit), 0);

    return digitalRootRecursive(sum);
};

const digitalRootMath = (n) => (n === 0 ? 0 : ((n - 1) % 9) + 1);