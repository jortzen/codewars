const dashatize = (num) => {
    if (isNaN(num)) return "NaN";

    return Math.abs(num)
        .toString()
        .split("")
        .map((digit) => (digit % 2 !== 0 ? `-${digit}-` : digit))
        .join("")
        .replace(/--+/g, "-")
        .replace(/^-|-$/g, "");
};

const dashOddReduce = (num) => {
    if (isNaN(num)) return "NaN";

    return Math.abs(num)
        .toString()
        .split("")
        .reduce((acc, digit) => {
            if (digit % 2 !== 0) acc += `-${digit}-`;
            else acc += digit;
            return acc;
        }, "")
        .replace(/--+/g, "-")
        .replace(/^-|-$/g, "");
};

const dashOddDigits = (num) => {
    if (isNaN(num)) return "NaN";

    let result = "";
    const strNum = Math.abs(num).toString();

    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] % 2 !== 0) {
            result +=
                (i > 0 ? "-" : "") +
                strNum[i] +
                (i < strNum.length - 1 ? "-" : "");
        } else {
            result += strNum[i];
        }
    }

    return result.replace(/--+/g, "-").replace(/^-|-$/g, "");
};