const sort = (initialArray, sortingArray) => {
    return initialArray
        .map((value, index) => [value, sortingArray[index]])
        .sort((a, b) => a[1] - b[1])
        .map((item) => item[0]);
};

const sortArrayByIndices = (initialArray, sortingArray) =>
    initialArray.reduce((sortedArray, value, index) => {
        sortedArray[sortingArray[index]] = value;
        return sortedArray;
    }, []);

const orderArray = (initialArray, sortingArray) => {
    const resultArray = new Array(initialArray.length);

    initialArray.forEach((value, index) => {
        resultArray[sortingArray[index]] = value;
    });

    return resultArray;
};