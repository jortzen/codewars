const derive = (coefficient, exponent) =>
    `${coefficient * exponent}x^${exponent - 1}`;

const deriveExpression = (coefficient, exponent) =>
    coefficient * exponent + "x^" + (exponent - 1);

const diffFunction = (coefficient, exponent) =>
    [coefficient * exponent, "x^", exponent - 1].join("");