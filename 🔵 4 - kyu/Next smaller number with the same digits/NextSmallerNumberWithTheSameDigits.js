const nextSmaller = (n) => {
    const digits = [...n.toString()];
    let i = digits.length - 2;

    while (i >= 0 && digits[i] <= digits[i + 1]) i--;
    if (i < 0) return -1;

    let j = digits.length - 1;
    while (digits[j] >= digits[i]) j--;
    [digits[i], digits[j]] = [digits[j], digits[i]];

    const result = [
        ...digits.slice(0, i + 1),
        ...digits.slice(i + 1).sort((a, b) => b - a),
    ].join("");

    return result[0] === "0" ? -1 : +result;
};

const nextSmallerDigits = (n) => {
    const arr = [...`${n}`];
    let i = arr.length - 2;

    while (i >= 0 && arr[i] <= arr[i + 1]) i--;
    if (i < 0) return -1;

    let j = arr.length - 1;
    while (arr[j] >= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];

    const combined = [
        ...arr.slice(0, i + 1),
        ...arr.slice(i + 1).sort((a, b) => b - a),
    ].join("");

    return combined[0] === "0" ? -1 : +combined;
};

const previousPermutation = (n) => {
    const str = n.toString().split("");
    let i = str.length - 2;

    while (i >= 0 && str[i] <= str[i + 1]) i--;
    if (i < 0) return -1;

    let j = str.length - 1;
    while (str[j] >= str[i]) j--;
    [str[i], str[j]] = [str[j], str[i]];

    const rearranged = [
        ...str.slice(0, i + 1),
        ...str.slice(i + 1).sort((a, b) => b - a),
    ].join("");

    return rearranged.startsWith("0") ? -1 : parseInt(rearranged);
};