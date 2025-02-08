const angle = (n) => (n - 2) * 180;

const sumAnglesRecursive = (n) =>
    n === 3 ? 180 : sumAnglesRecursive(n - 1) + 180;

const sumAnglesLoop = (n) => {
    let sum = 0;
    for (let i = 3; i <= n; i++) sum += 180;
    return sum;
};