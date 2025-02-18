const lcm = (...args) => {
    if (!args.length) return 1;
    if (args.includes(0)) return 0;

    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return args.reduce((lcm, num) => (lcm * num) / gcd(lcm, num), 1);
};

const lcmIterative = (...args) => {
    if (!args.length) return 1;
    if (args.includes(0)) return 0;

    let lcm = 1;
    for (let num of args) {
        let a = lcm,
            b = num;
        while (b) [a, b] = [b, a % b];
        lcm = (lcm * num) / a;
    }
    return lcm;
};

const lcmBruteForce = (...args) => {
    if (!args.length) return 1;
    if (args.includes(0)) return 0;

    let max = Math.max(...args);
    let lcm = max;

    while (!args.every((num) => lcm % num === 0)) {
        lcm += max;
    }
    return lcm;
};