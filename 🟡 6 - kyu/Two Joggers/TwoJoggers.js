const nbrOfLaps = (x, y) => {
    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    const lcm = (a, b) => (a * b) / gcd(a, b);
    return [lcm(x, y) / x, lcm(x, y) / y];
};

const lapsIncremental = (x, y) => {
    let lapsX = x,
        lapsY = y;

    while (lapsX !== lapsY) {
        if (lapsX < lapsY) lapsX += x;
        else lapsY += y;
    }

    return [lapsX / x, lapsY / y];
};

const lapsWithWhile = (x, y) => {
    let multiple = Math.max(x, y);

    while (multiple % x !== 0 || multiple % y !== 0) {
        multiple++;
    }

    return [multiple / x, multiple / y];
};