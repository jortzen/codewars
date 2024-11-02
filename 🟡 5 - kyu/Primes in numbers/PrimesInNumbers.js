const primeFactors = (n) => {
    let result = "";

    for (let factor = 2; factor <= n; factor++) {
        let count = 0;
        while (n % factor === 0) {
            n /= factor;
            count++;
        }
        if (count) {
            result += `(${factor}${count > 1 ? `**${count}` : ""})`;
        }
    }

    return result;
};

const primeFactorization = (n) => {
    const factors = [];

    for (let i = 2; i <= n; i++) {
        let exponent = 0;
        while (n % i === 0) {
            n /= i;
            exponent++;
        }
        if (exponent > 0) {
            factors.push(`(${i}${exponent > 1 ? `**${exponent}` : ""})`);
        }
    }

    return factors.join("");
};

const decomposeToPrimes = (n) => {
    let result = "";

    for (let div = 2; div * div <= n; div++) {
        let count = 0;
        while (n % div === 0) {
            n /= div;
            count++;
        }
        if (count) result += `(${div}${count > 1 ? `**${count}` : ""})`;
    }

    if (n > 1) result += `(${n})`;
    
    return result;
};