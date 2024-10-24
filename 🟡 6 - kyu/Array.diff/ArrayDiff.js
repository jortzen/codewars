const arrayDiff = (a, b) => a.filter((x) => !b.includes(x));

const arrayDiffB = (a, b) => {
    const bSet = new Set(b);
    return a.filter((x) => !bSet.has(x));
};

const diffC = (a, b) => {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) result.push(a[i]);
    }
    
    return result;
};
