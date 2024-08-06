const problem = (x) => {
    return typeof x === "number" ? x * 50 + 6 : "Error";
};

const evaluateExpression = (x) => {
    switch (typeof x) {
        case "number":
            return x * 50 + 6;
        default:
            return "Error";
    }
};

const calculateResult = (x) => {
    return Number.isFinite(x) ? x * 50 + 6 : "Error";
};