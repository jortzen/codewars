const divCon = (x) => {
    return x.reduce((acc, val) => acc + (val === +val ? val : -val), 0);
};

const calculateSumAndDifference = (x) => {
    const [numbers, strings] = x.reduce(
        ([nums, strs], val) =>
            typeof val === "number"
                ? [[...nums, val], strs]
                : [nums, [...strs, Number(val)]],
        [[], []]
    );

    return (
        numbers.reduce((a, b) => a + b, 0) - strings.reduce((a, b) => a + b, 0)
    );
};

const computeDifference = (x) => {
    let sum = 0;

    x.forEach((val) => {
        sum += typeof val === "number" ? val : -Number(val);
    });

    return sum;
};