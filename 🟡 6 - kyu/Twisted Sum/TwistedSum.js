const twistedSum = (n) =>
    Array.from({ length: n }, (_, i) => i + 1).reduce(
        (sum, num) => sum + [...String(num)].reduce((a, d) => a + +d, 0),
        0
    );

const twistedSumMapFlat = (n) =>
    Array.from({ length: n }, (_, i) => i + 1)
        .map((num) => [...`${num}`].map(Number))
        .flat()
        .reduce((a, b) => a + b, 0);

const twistedSumLoop = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
    }
    return sum;
};