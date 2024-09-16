const matrix = (array) => {
    return array.map((row, i) =>
        row.map((val, j) => (i === j ? (val < 0 ? 0 : 1) : val))
    );
};

const transformMainDiagonal = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i][i] = array[i][i] < 0 ? 0 : 1;
    }

    return array;
};

const processDiagonalWithReduce = (array) => {
    return array.reduce((newArr, row, i) => {
        newArr.push(row.map((num, j) => (i === j ? (num < 0 ? 0 : 1) : num)));
        return newArr;
    }, []);
};