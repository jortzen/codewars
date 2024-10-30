const sumArray = (array) => {
    if (!array || array.length <= 2) return 0;
    const sortedArray = array.slice().sort((a, b) => a - b);

    return sortedArray.slice(1, -1).reduce((sum, num) => sum + num, 0);
};

const sumWithoutExtremes = (array) => {
    return array && array.length > 2
        ? array.reduce((sum, num) => sum + num, 0) -
              Math.min(...array) -
              Math.max(...array)
        : 0;
};

const sumArrayExcludingEdges = (array) =>
    array && array.length > 2
        ? array
              .sort((a, b) => a - b)
              .slice(1, -1)
              .reduce((sum, num) => sum + num, 0)
        : 0;
