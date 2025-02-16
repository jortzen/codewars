const chained = (functions) => {
    return (input) => {
        return functions.reduce((result, fn) => fn(result), input);
    };
};

const chainedReduce = (functions) => (input) =>
    functions.reduce((acc, fn) => fn(acc), input);

const chainedForLoop = (functions) => (input) => {
    let result = input;
    for (let fn of functions) {
        result = fn(result);
    }
    return result;
};

const chainedRecursion = (functions) => (input) =>
    functions.length === 0
        ? input
        : chainedRecursion(functions.slice(1))(functions[0](input));