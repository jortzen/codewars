const matrixAddition = (a, b) =>
    a.map((row, i) => row.map((val, j) => val + b[i][j]));

const matrixSum = (a, b) =>
    a.map((row, i) =>
        row.reduce((sumRow, val, j) => [...sumRow, val + b[i][j]], [])
    );

const combineMatrices = (a, b) => {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        result[i] = [];
        for (let j = 0; j < a[i].length; j++) {
            result[i][j] = a[i][j] + b[i][j];
        }
    }

    return result;
};

const sumOfMatrices = (a, b) => {
    const result = [];

    a.forEach((row, i) => {
        result[i] = [];
        row.forEach((val, j) => {
            result[i][j] = val + b[i][j];
        });
    });

    return result;
};