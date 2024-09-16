const distinct = (a) => {
    return a.filter((item, index) => a.indexOf(item) === index);
};

const distinctSet = (a) => {
    return [...new Set(a)];
};

const distinctReduce = (arr) =>
    arr.reduce((acc, item) => {
        if (!acc.includes(item)) acc.push(item);
        return acc;
    }, []);
