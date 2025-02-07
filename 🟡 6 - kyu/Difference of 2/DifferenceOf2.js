const twosDifference = (input) => {
    const set = new Set(input);

    return input
        .filter((num) => set.has(num + 2))
        .sort((a, b) => a - b)
        .map((num) => [num, num + 2]);
};

const findPairsSortingFirst = (input) => {
    input.sort((a, b) => a - b);
    let result = [],
        i = 0,
        j = 1;

    while (j < input.length) {
        let diff = input[j] - input[i];
        if (diff === 2) result.push([input[i], input[j]]);
        diff <= 2 ? j++ : i++;
    }

    return result;
};

const findPairsUsingLoop = (input) => {
    let result = [];
    input.sort((a, b) => a - b);

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] - input[i] === 2) result.push([input[i], input[j]]);
        }
    }

    return result;
};
