const nbDig = (n, d) => {
    const digit = d.toString();

    return Array.from({ length: n + 1 }, (_, k) => (k ** 2).toString()).reduce(
        (count, square) =>
            count + [...square].filter((char) => char === digit).length,
        0
    );
};

const countDigitSquaresForLoop = (n, d) => {
    const digit = d.toString();
    let count = 0;

    for (let k = 0; k <= n; k++) {
        const square = (k ** 2).toString();
        for (const char of square) {
            if (char === digit) count++;
        }
    }

    return count;
};

const countDigitSquaresRegex = (n, d) => {
    const regex = new RegExp(d, "g");
    
    return Array.from({ length: n + 1 }, (_, k) => (k ** 2).toString()).reduce(
        (count, square) => count + (square.match(regex)?.length || 0),
        0
    );
};
