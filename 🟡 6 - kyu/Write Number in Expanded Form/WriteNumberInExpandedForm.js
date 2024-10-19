const expandedForm = (num) => {
    return num
        .toString()
        .split("")
        .map((digit, index, arr) => digit + "0".repeat(arr.length - index - 1))
        .filter((digit) => digit[0] !== "0")
        .join(" + ");
};

const expandedFormGenerator = (num) => {
    return [...num.toString()]
        .reverse()
        .map((digit, index) => (digit === "0" ? "" : digit + "0".repeat(index)))
        .filter(Boolean)
        .reverse()
        .join(" + ");
};

const numberToExpandedForm = (num) => {
    return String(num)
        .split("")
        .reduce((acc, digit, index, arr) => {
            if (digit !== "0") {
                acc.push(digit + "0".repeat(arr.length - index - 1));
            }
            return acc;
        }, [])
        .join(" + ");
};