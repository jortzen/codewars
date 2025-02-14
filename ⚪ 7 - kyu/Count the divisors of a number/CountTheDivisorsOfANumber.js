const getDivisorsCnt = (n) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === n / i) {
                count++;
            } else {
                count += 2;
            }
        }
    }
    return count;
};

const countDivisorsPrimeFactor = (n) => {
    let count = 1;
    let factor = 2;

    while (factor * factor <= n) {
        if (n % factor === 0) {
            let exponent = 0;
            while (n % factor === 0) {
                n /= factor;
                exponent++;
            }
            count *= exponent + 1;
        }
        factor++;
    }

    if (n > 1) {
        count *= 2;
    }

    return count;
};