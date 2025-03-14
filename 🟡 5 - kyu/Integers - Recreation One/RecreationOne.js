const listSquared = (m, n) => {
    const getDivisorsSum = (num) => {
        let sum = 0;
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                sum += i * i;
                if (i !== num / i) sum += (num / i) * (num / i);
            }
        }
        return sum;
    };

    return Array.from({ length: n - m + 1 }, (_, i) => m + i)
        .map((num) => [num, getDivisorsSum(num)])
        .filter(([_, sum]) => Math.sqrt(sum) % 1 === 0);
};

const computeSquaredDivisors = (m, n) => {
    function* range(start, end) {
        for (let i = start; i <= end; i++) yield i;
    }

    const sumSquaredDivisors = (num) =>
        [...range(1, Math.sqrt(num))]
            .filter((i) => num % i === 0)
            .reduce(
                (sum, i) => sum + i * i + (i !== num / i ? (num / i) ** 2 : 0),
                0
            );

    return [...range(m, n)]
        .map((num) => [num, sumSquaredDivisors(num)])
        .filter(([_, sum]) => Math.sqrt(sum) % 1 === 0);
};

const findPerfectSquares = (m, n) => {
    const getDivisorsSum = (num) => {
        let sum = 0;
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                sum += i * i;
                if (i !== num / i) sum += (num / i) * (num / i);
            }
        }
        return sum;
    };

    return Array.from({ length: n - m + 1 }, (_, i) => m + i)
        .map((num) => [num, getDivisorsSum(num)])
        .filter(([_, sum]) => Math.sqrt(sum) % 1 === 0);
};