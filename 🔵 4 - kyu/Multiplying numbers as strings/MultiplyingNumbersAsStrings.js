const multiply = (a, b) => {
    if (a === "0" || b === "0") return "0";

    let result = Array(a.length + b.length).fill(0);

    for (let i = a.length - 1; i >= 0; i--) {
        for (let j = b.length - 1; j >= 0; j--) {
            let mul = (a[i] - "0") * (b[j] - "0");
            let sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    return result.join("").replace(/^0+/, "");
};

const multiplyStringSum = (a, b) => {
    if (a === "0" || b === "0") return "0";

    const addStrings = (num1, num2) => {
        let carry = 0,
            result = "",
            i = num1.length - 1,
            j = num2.length - 1;
        while (i >= 0 || j >= 0 || carry) {
            let sum =
                (i >= 0 ? num1[i--] - "0" : 0) +
                (j >= 0 ? num2[j--] - "0" : 0) +
                carry;
            result = (sum % 10) + result;
            carry = (sum / 10) | 0;
        }
        return result;
    };

    let partialSums = [];
    for (let i = a.length - 1; i >= 0; i--) {
        let carry = 0,
            row = "";
        for (let j = b.length - 1; j >= 0; j--) {
            let mul = (a[i] - "0") * (b[j] - "0") + carry;
            row = (mul % 10) + row;
            carry = (mul / 10) | 0;
        }
        if (carry) row = carry + row;
        partialSums.push(row + "0".repeat(a.length - 1 - i));
    }

    return partialSums.reduce(addStrings).replace(/^0+/, "");
};