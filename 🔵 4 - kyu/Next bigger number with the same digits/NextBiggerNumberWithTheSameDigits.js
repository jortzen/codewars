const nextBigger = (n) => {
    let digits = [...String(n)];
    let i = digits.length - 2;

    while (i >= 0 && digits[i] >= digits[i + 1]) i--;
    if (i === -1) return -1;

    let j = digits.length - 1;
    while (digits[j] <= digits[i]) j--;

    [digits[i], digits[j]] = [digits[j], digits[i]];
    return Number(
        [...digits.slice(0, i + 1), ...digits.slice(i + 1).reverse()].join("")
    );
};

const nextBiggerSortedArray = (n) => {
    let digits = [...String(n)];
    let i = digits.length - 2;

    while (i >= 0 && digits[i] >= digits[i + 1]) i--;
    if (i === -1) return -1;

    let j = digits.length - 1;
    while (digits[j] <= digits[i]) j--;

    [digits[i], digits[j]] = [digits[j], digits[i]];
    let sortedPart = digits.slice(i + 1).sort();

    return Number([...digits.slice(0, i + 1), ...sortedPart].join(""));
};

const nextBiggerStringManipulation = (n) => {
    let s = String(n),
        i = s.length - 2;

    while (i >= 0 && s[i] >= s[i + 1]) i--;
    if (i === -1) return -1;

    let j = s.length - 1;
    while (s[j] <= s[i]) j--;

    let arr = [...s];
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return Number(
        arr.slice(0, i + 1).join("") +
            arr
                .slice(i + 1)
                .sort()
                .join("")
    );
};