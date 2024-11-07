const oddOne = (arr) => arr.findIndex((num) => num % 2 !== 0);

const oddOneForLoop = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) return i;
    }

    return -1;
};

const oddOneReduce = (arr) => {
    return arr.reduce(
        (index, num, i) => (index === -1 && num % 2 !== 0 ? i : index),
        -1
    );
};