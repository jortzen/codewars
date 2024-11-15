const isSquare = (n) => n >= 0 && Math.sqrt(n) % 1 === 0;

const checkSquare = (n) => n >= 0 && Number.isInteger(Math.sqrt(n));

const isSquareNumber = (n) => n >= 0 && Math.floor(Math.sqrt(n)) ** 2 === n;

const isPerfectSquareNumber = (n) =>
    n >= 0 && Math.pow(Math.round(Math.sqrt(n)), 2) === n;