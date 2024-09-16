const sumMix = (x) => {
    return x.reduce((sum, num) => sum + Number(num), 0);
};

const mapToSum = (x) => {
    return x.map(Number).reduce((sum, num) => sum + num, 0);
};

const convertAndSum = (x) => {
    let sum = 0;

    x.forEach((num) => (sum += Number(num)));

    return sum;
};

const sumWithForLoop = (x) => {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return sum;
};
