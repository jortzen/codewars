const sumOfDivided = (lst) => {
    const primeFactors = (num) => {
        let absNum = Math.abs(num);
        let factors = new Set();
        let factor = 2;

        while (factor * factor <= absNum) {
            while (absNum % factor === 0) {
                factors.add(factor);
                absNum /= factor;
            }
            factor++;
        }
        if (absNum > 1) factors.add(absNum);
        return factors;
    };

    let factorMap = new Map();

    lst.forEach((num) => {
        primeFactors(num).forEach((p) => {
            factorMap.set(p, (factorMap.get(p) || 0) + num);
        });
    });

    return [...factorMap.entries()].sort((a, b) => a[0] - b[0]);
};

const sumOfDividedCached = (lst) => {
    const factorCache = new Map();

    const primeFactors = (num) => {
        if (factorCache.has(num)) return factorCache.get(num);
        let absNum = Math.abs(num);
        let factors = new Set();
        let factor = 2;

        while (factor * factor <= absNum) {
            while (absNum % factor === 0) {
                factors.add(factor);
                absNum /= factor;
            }
            factor++;
        }
        if (absNum > 1) factors.add(absNum);
        factorCache.set(num, factors);
        return factors;
    };

    let factorMap = new Map();

    lst.forEach((num) => {
        primeFactors(num).forEach((p) => {
            factorMap.set(p, (factorMap.get(p) || 0) + num);
        });
    });

    return [...factorMap.entries()].sort((a, b) => a[0] - b[0]);
};