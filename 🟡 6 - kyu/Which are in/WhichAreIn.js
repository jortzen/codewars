const inArray = (array1, array2) =>
    array1.filter((word) => array2.some((str) => str.includes(word))).sort();

const findSubstringsReduce = (array1, array2) =>
    array1
        .reduce((acc, word) => {
            if (array2.some((str) => str.includes(word))) acc.push(word);
            return acc;
        }, [])
        .sort();

const findSubstringsNested = (array1, array2) => {
    const result = [];

    for (let word of array1) {
        for (let str of array2) {
            if (str.includes(word)) {
                result.push(word);
                break;
            }
        }
    }

    return result.sort();
};

const findSubstringsSet = (array1, array2) => {
    const resultSet = new Set();

    array1.forEach((word) => {
        array2.forEach((str) => {
            if (str.includes(word)) resultSet.add(word);
        });
    });
    
    return [...resultSet].sort();
};