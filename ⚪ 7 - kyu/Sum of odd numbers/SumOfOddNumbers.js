const rowSumOddNumbers = (n) => n ** 3;

const rowSumUsingFormula = (n) => Math.pow(n, 3);

const rowOddNumbersSum = (n) => {
    let sum = 0;
    let first = n * (n - 1) + 1;

    for (let i = 0; i < n; i++) {
        sum += first;
        first += 2;
    }
    
    return sum;
};
