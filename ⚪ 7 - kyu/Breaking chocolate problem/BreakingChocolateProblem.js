const breakChocolate = (n, m) => (n > 0 && m > 0 ? n * m - 1 : 0);

const splitChocolate = (n, m) => (n * m || 1) - 1;

const divideChocolate = (n, m) => (n < 1 || m < 1 ? 0 : n * m - 1);