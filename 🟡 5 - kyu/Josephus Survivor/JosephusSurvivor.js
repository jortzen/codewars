const josephusSurvivor = (n, k) =>
    n === 1 ? 1 : ((josephusSurvivor(n - 1, k) + k - 1) % n) + 1;

const josephusIterative = (n, k) => {
    let survivor = 0;

    for (let i = 2; i <= n; i++) {
        survivor = (survivor + k) % i;
    }

    return survivor + 1;
};

const josephusReduce = (n, k) =>
    Array.from({ length: n }, (_, i) => i + 1).reduce(
        (acc, _, i) => (acc + k) % (i + 1),
        0
    ) + 1;