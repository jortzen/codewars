const backwardsPrime = (start, stop) => {
    const isPrime = (num) =>
        num > 1 &&
        Array.from({ length: Math.sqrt(num) | 0 }, (_, i) => i + 2).every(
            (i) => num % i !== 0
        );
    const reverseNum = (num) => +num.toString().split("").reverse().join("");
    return Array.from({ length: stop - start + 1 }, (_, i) => start + i).filter(
        (n) => isPrime(n) && isPrime(reverseNum(n)) && n !== reverseNum(n)
    );
};

const getReversePrimes = (start, stop) => {
    const isPrime = (num) => {
        if (num < 2) return false;
        if (num < 4) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    };
    return Array.from({ length: stop - start + 1 }, (_, i) => start + i).filter(
        (n) =>
            isPrime(n) &&
            isPrime(+n.toString().split("").reverse().join("")) &&
            n !== +n.toString().split("").reverse().join("")
    );
};