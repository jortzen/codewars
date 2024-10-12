const calculateMax = (a, b, c) =>
    Math.max(a + b + c, a * b * c, a * (b + c), (a + b) * c);

const maximizeOperations = (a, b, c) => {
    let maxValue = a + b + c;

    maxValue = Math.max(maxValue, a * b * c);
    maxValue = Math.max(maxValue, a * (b + c));
    maxValue = Math.max(maxValue, (a + b) * c);

    return maxValue;
};

const evaluateExpressions = (a, b, c) => {
    const expressions = [
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c,
    ];
    
    return Math.max(...expressions);
};