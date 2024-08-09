const doubleEveryOther = (a) => {
    return a.map((num, index) => {
        return index % 2 !== 0 ? num * 2 : num;
    });
};

const doubleEveryOtherForEach = (a) => {
    let result = [];

    a.forEach((num, index) => result.push(index % 2 !== 0 ? num * 2 : num));

    return result;
};

const doubleEveryOtherForLoop = (a) => {
    for (let index = 1; index < a.length; index += 2) {
        a[index] *= 2;
    }

    return a;
};