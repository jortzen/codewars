const genfib = () => {
    let [a, b] = [0, 1];

    return () => {
        const current = a;
        [a, b] = [b, a + b];
        return current;
    };
};

const fibonacciGen = () => {
    let a = 0,
        b = 1;

    return () => {
        const res = a;
        a = b;
        b = res + b;
        return res;
    };
};

const generateFibonacci = () => {
    let count = -1;
    const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));
    return () => fib(++count);
};