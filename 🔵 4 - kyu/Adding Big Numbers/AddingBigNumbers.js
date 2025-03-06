const add = (a, b) => {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let digitA = i >= 0 ? +a[i--] : 0;
        let digitB = j >= 0 ? +b[j--] : 0;
        let sum = digitA + digitB + carry;

        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }

    return result;
};

const addStrings = (a, b) => {
    let carry = 0;
    let arrA = a.split("").reverse();
    let arrB = b.split("").reverse();
    let maxLength = Math.max(arrA.length, arrB.length);

    let sumArray = Array.from({ length: maxLength }, (_, i) => {
        let digitA = arrA[i] ? +arrA[i] : 0;
        let digitB = arrB[i] ? +arrB[i] : 0;
        let sum = digitA + digitB + carry;

        carry = Math.floor(sum / 10);
        return sum % 10;
    });

    if (carry) sumArray.push(carry);

    return sumArray.reverse().join("");
};

const sumLargeNumbers = (a, b) => {
    const helper = (a, b, carry) => {
        if (!a.length && !b.length && !carry) return "";

        let lastA = a.length ? +a.slice(-1) : 0;
        let lastB = b.length ? +b.slice(-1) : 0;
        let sum = lastA + lastB + carry;

        return (
            helper(a.slice(0, -1), b.slice(0, -1), Math.floor(sum / 10)) +
            (sum % 10)
        );
    };

    let result = helper(a, b, 0);
    return result || "0";
};