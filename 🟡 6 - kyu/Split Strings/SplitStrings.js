const solution = (str) => {
    let result = [];

    for (let i = 0; i < str.length; i += 2) {
        result.push(str[i] + (str[i + 1] || "_"));
    }

    return result;
};

const pairify = (str) =>
    (str.length % 2 ? str + "_" : str).match(/.{1,2}/g) || [];

const divideIntoPairs = (str) =>
    [...str.padEnd(str.length + (str.length % 2), "_")].reduce(
        (acc, _, i, arr) => (i % 2 === 0 ? [...acc, arr[i] + arr[i + 1]] : acc),
        []
    );