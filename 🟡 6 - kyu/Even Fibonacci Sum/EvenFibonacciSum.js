const fibonacci = (max) => {
    let [a, b, sum] = [0, 1, 0];

    while (b < max) {
        if (b % 2 === 0) sum += b;
        [a, b] = [b, a + b];
    }

    return sum;
};

const fibonacciFor = (max) => {
    let [a, b, sum] = [0, 1, 0];
    for (; b < max; [a, b] = [b, a + b]) if (b % 2 === 0) sum += b;
    return sum;
};

const fibonacciArray = (max) => {
    const fibs = [0, 1];
    while (fibs[fibs.length - 1] + fibs[fibs.length - 2] < max)
        fibs.push(fibs.at(-1) + fibs.at(-2));

    return fibs.filter((n) => n % 2 === 0).reduce((acc, val) => acc + val, 0);
};