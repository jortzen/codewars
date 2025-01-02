const chooseBestSum = (t, k, ls) => {
    const combinations = (arr, k) => {
        if (k === 0) return [[]];
        if (arr.length === 0) return [];
        const [first, ...rest] = arr;
        return combinations(rest, k - 1)
            .map((comb) => [first, ...comb])
            .concat(combinations(rest, k));
    };

    const validSums = combinations(ls, k)
        .map((comb) => comb.reduce((sum, val) => sum + val, 0))
        .filter((sum) => sum <= t);

    return validSums.length ? Math.max(...validSums) : null;
};

const bestSumIterative = (t, k, ls) => {
    const combinations = [];
    const n = ls.length;

    const generate = (start, comb) => {
        if (comb.length === k) {
            combinations.push([...comb]);
            return;
        }
        for (let i = start; i < n; i++) {
            comb.push(ls[i]);
            generate(i + 1, comb);
            comb.pop();
        }
    };

    generate(0, []);

    const validSums = combinations
        .map((comb) => comb.reduce((sum, val) => sum + val, 0))
        .filter((sum) => sum <= t);

    return validSums.length ? Math.max(...validSums) : null;
};

const bestSumReduce = (t, k, ls) => {
    const combinations = ls.reduce(
        (acc, val) => acc.concat(acc.map((comb) => [...comb, val])),
        [[]]
    );

    const validSums = combinations
        .filter((comb) => comb.length === k)
        .map((comb) => comb.reduce((sum, val) => sum + val, 0))
        .filter((sum) => sum <= t);

    return validSums.length ? Math.max(...validSums) : null;
};