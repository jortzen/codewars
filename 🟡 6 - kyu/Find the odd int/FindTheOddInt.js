const findOdd = (A) => {
    return A.find((num) => A.filter((x) => x === num).length % 2 !== 0);
};

const findOddReduce = (A) => {
    return A.reduce((a, b) => a ^ b);
};

const findOddSet = (A) => {
    const set = new Set();

    for (const num of A) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }

    return [...set][0];
};