const sumPairs = (ints, s) => {
    let seen = new Set();

    for (let num of ints) {
        if (seen.has(s - num)) {
            return [s - num, num];
        }
        seen.add(num);
    }

    return undefined;
};

const firstPairSum = (ints, sum) => {
    const indices = {};

    for (let i = 0; i < ints.length; i++) {
        const complement = sum - ints[i];
        if (complement in indices) return [complement, ints[i]];
        indices[ints[i]] = i;
    }

    return undefined;
};

const sumToPair = (ints, sum) => {
    const seen = new Map();

    for (let i = 0; i < ints.length; i++) {
        const complement = sum - ints[i];
        if (seen.has(complement)) return [complement, ints[i]];
        seen.set(ints[i], i);
    }
    
    return undefined;
};