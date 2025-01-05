const basicOp = (operation, value1, value2) => {
    switch (operation) {
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":
            return value1 * value2;
        case "/":
            return value1 / value2;
        default:
            return null;
    }
};

const basicOperationIfElse = (operation, value1, value2) => {
    if (operation === "+") return value1 + value2;
    if (operation === "-") return value1 - value2;
    if (operation === "*") return value1 * value2;
    if (operation === "/") return value1 / value2;
    return null;
};

const basicOperationMap = (operation, value1, value2) => {
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    };

    return operations[operation](value1, value2);
};

const basicOperationEval = (operation, value1, value2) =>
    eval(`${value1} ${operation} ${value2}`);