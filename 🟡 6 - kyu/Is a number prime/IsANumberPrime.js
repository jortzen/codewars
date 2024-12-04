const isPrime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
};

const isPrimeBasic = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

const isPrimeOptimized = (num) => {
    if (num <= 1) return false;
    if (num % 2 === 0) return num === 2;

    const limit = Math.sqrt(num);

    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
};