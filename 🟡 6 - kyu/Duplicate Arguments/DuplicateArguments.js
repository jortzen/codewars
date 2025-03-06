const solution = (...args) => new Set(args).size !== args.length;

const containsDuplicates = (...args) =>
    args.some((value, index) => args.indexOf(value) !== index);

const hasDuplicateValues = (...args) =>
    args.length !== [...new Set(args)].length;