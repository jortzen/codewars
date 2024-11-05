const isTriangle = (a, b, c) => {
    return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
};

const isValidTriangle = (a, b, c) =>
    [a, b, c].every((side) => side > 0) && a + b > c && a + c > b && b + c > a;

const canFormTriangle = (a, b, c) =>
    a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;