const orderWeight = (strng) => {
    const weightSum = (num) =>
        num.split("").reduce((acc, digit) => acc + Number(digit), 0);

    return strng
        .trim()
        .split(/\s+/)
        .sort((a, b) => {
            const weightA = weightSum(a);
            const weightB = weightSum(b);
            return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
        })
        .join(" ");
};

const sortByWeight = (strng) => {
    const getWeight = (num) =>
        Array.from(num).reduce((sum, digit) => sum + parseInt(digit), 0);
    return strng
        .trim()
        .split(/\s+/)
        .sort((a, b) => {
            const weightA = getWeight(a);
            const weightB = getWeight(b);
            return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
        })
        .join(" ");
};

const orderWeights = (strng) =>
    strng
        .trim()
        .split(/\s+/)
        .sort((a, b) => {
            const weightA = a.split("").reduce((sum, digit) => sum + +digit, 0);
            const weightB = b.split("").reduce((sum, digit) => sum + +digit, 0);
            return weightA === weightB ? a.localeCompare(b) : weightA - weightB;
        })
        .join(" ");