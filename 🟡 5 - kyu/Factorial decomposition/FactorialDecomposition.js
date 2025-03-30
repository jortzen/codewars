const decomp = (n) => {
    const primes = [];
    const factorCounts = {};

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primes.push(i);
    }

    const countFactors = (num, prime) => {
        let count = 0;
        while (num > 0) {
            count += Math.floor(num / prime);
            num = Math.floor(num / prime);
        }
        return count;
    };

    for (let prime of primes) {
        let count = countFactors(n, prime);
        factorCounts[prime] = count;
    }

    return primes
        .map((p) =>
            factorCounts[p] === 1 ? `${p}` : `${p}^${factorCounts[p]}`
        )
        .join(" * ");
};

const factorialDecompSieve = (n) => {
    const sieve = Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;
    const primes = [];

    for (let i = 2; i <= n; i++) {
        if (sieve[i]) {
            primes.push(i);
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }

    const countFactors = (num, prime) => {
        let count = 0;
        while (num > 0) {
            count += Math.floor(num / prime);
            num = Math.floor(num / prime);
        }
        return count;
    };

    return primes
        .map((p) => {
            const count = countFactors(n, p);
            return count === 1 ? `${p}` : `${p}^${count}`;
        })
        .join(" * ");
};

const factorialDecompRecursive = (n) => {
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const primes = Array.from({ length: n + 1 }, (_, i) => i).filter(isPrime);

    const countFactors = (num, prime) =>
        num === 0
            ? 0
            : Math.floor(num / prime) +
              countFactors(Math.floor(num / prime), prime);

    return primes
        .map((p) => {
            const count = countFactors(n, p);
            return count === 1 ? `${p}` : `${p}^${count}`;
        })
        .join(" * ");
};