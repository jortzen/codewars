const nthFibo = (n) => (n <= 2 ? n - 1 : nthFibo(n - 1) + nthFibo(n - 2));

const findNthFibo = (n) => {
    let a = 0,
        b = 1;

    for (let i = 1; i < n; i++) {
        [a, b] = [b, a + b];
    }

    return a;
};

const calculateNthFibo = (n) => {
    const sqrt5 = Math.sqrt(5);

    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;
    
    return Math.round((Math.pow(phi, n - 1) - Math.pow(psi, n - 1)) / sqrt5);
};
