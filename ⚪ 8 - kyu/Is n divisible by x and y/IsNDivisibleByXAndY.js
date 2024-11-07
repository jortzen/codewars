const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;

const checkAllDivisors = (n, x, y) =>
    [x, y].every((divisor) => n % divisor === 0);

const checkBothDivisible = (n, x, y) => {
    const isDivisible = (a, b) => a % b === 0;
    
    return isDivisible(n, x) && isDivisible(n, y);
};