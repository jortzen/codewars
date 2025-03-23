const factorial = (n) => {
    if (n < 0) return null;
    let result = [1];
    for (let i = 2; i <= n; i++) {
        let carry = 0;
        for (let j = 0; j < result.length; j++) {
            let prod = result[j] * i + carry;
            result[j] = prod % 10;
            carry = Math.floor(prod / 10);
        }
        while (carry) {
            result.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }
    return result.reverse().join("");
};

const getFactorial = (n) => {
    if (n < 0) return null;
    const multiply = (num1, num2) => {
        let a = num1.split("").reverse().map(Number);
        let b = num2.split("").reverse().map(Number);
        let result = Array(a.length + b.length).fill(0);
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                result[i + j] += a[i] * b[j];
                if (result[i + j] >= 10) {
                    result[i + j + 1] += Math.floor(result[i + j] / 10);
                    result[i + j] %= 10;
                }
            }
        }
        while (result.length > 1 && result[result.length - 1] === 0)
            result.pop();
        return result.reverse().join("");
    };
    const factorialHelper = (num) =>
        num <= 1 ? "1" : multiply(num.toString(), factorialHelper(num - 1));
    return factorialHelper(n);
};