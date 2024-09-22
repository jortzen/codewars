const moveZeros = (arr) => {
    const result = [];
    let zeroCount = 0;

    arr.forEach((item) => {
        if (item === 0) {
            zeroCount++;
        } else {
            result.push(item);
        }
    });

    result.push(...Array(zeroCount).fill(0));

    return result;
};

const pushZerosToEnd = (arr) => {
    const result = [];
    let zeroCount = 0;

    for (const item of arr) {
        if (item === 0) {
            zeroCount++;
        } else {
            result.push(item);
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
};

const moveZeroesToEnd = (arr) => {
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
            arr.splice(i, 1);
            i--;
        }
    }

    arr.push(...Array(zeroCount).fill(0));
    return arr;
};