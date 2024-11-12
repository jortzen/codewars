const findOutlierCount = (integers) => {
    const isOdd = (n) => n % 2 !== 0;
    const oddCount = integers.filter(isOdd).length;

    return oddCount === 1
        ? integers.find(isOdd)
        : integers.find((n) => !isOdd(n));
};

const findOutlierPartition = (integers) => {
    const odd = integers.filter((n) => n % 2 !== 0);
    const even = integers.filter((n) => n % 2 === 0);

    return odd.length === 1 ? odd[0] : even[0];
};

const findOutlierLoop = (integers) => {
    let odd = [],
        even = [];

    for (const n of integers) {
        (n % 2 === 0 ? even : odd).push(n);
        if (odd.length > 1 && even.length === 1) return even[0];
        if (even.length > 1 && odd.length === 1) return odd[0];
    }
};

const findOutlierXor = (integers) => {
    const isOdd = (n) => n & 1;

    const odd = integers.filter(isOdd);
    const even = integers.filter((n) => !isOdd(n));
    
    return odd.length === 1 ? odd[0] : even[0];
};