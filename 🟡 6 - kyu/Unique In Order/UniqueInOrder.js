const uniqueInOrder = (iterable) => {
    const result = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            result.push(iterable[i]);
        }
    }

    return result;
};

const uniqueInOrderFilter = (iterable) =>
    [...iterable].filter((item, i) => item !== iterable[i + 1]);

const uniqueInOrderReduce = (iterable) =>
    [...iterable].reduce((acc, item) => {
        if (item !== acc[acc.length - 1]) acc.push(item);
        return acc;
    }, []);