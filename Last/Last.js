const last = (...args) => {
    return args.length === 1
        ? Array.isArray(args[0]) || typeof args[0] === "string"
            ? args[0][args[0].length - 1]
            : args[0]
        : args[args.length - 1];
};

const findLast = (first, ...rest) =>
    rest.length ? rest.pop() : first.length ? [...first].pop() : first;

const lastElement = (...args) => {
    if (args.length === 1) {
        const [first] = args;

        return Array.isArray(first) || typeof first === "string"
            ? first[first.length - 1]
            : first;
    }

    return args[args.length - 1];
};