const sumStrings = (a, b) => {
    let carry = 0,
        result = "";
    let i = a.length - 1,
        j = b.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        let sum = (i >= 0 ? +a[i--] : 0) + (j >= 0 ? +b[j--] : 0) + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }

    return result.replace(/^0+/, "") || "0";
};

const computeStringSum = (a, b) => {
    let carry = 0;
    let arrA = a.split("").reverse(),
        arrB = b.split("").reverse();
    let length = Math.max(arrA.length, arrB.length);

    let sumArray = Array.from({ length }, (_, i) => {
        let sum = (arrA[i] ? +arrA[i] : 0) + (arrB[i] ? +arrB[i] : 0) + carry;
        carry = Math.floor(sum / 10);
        return sum % 10;
    });

    if (carry) sumArray.push(carry);

    return sumArray.reverse().join("").replace(/^0+/, "") || "0";
};