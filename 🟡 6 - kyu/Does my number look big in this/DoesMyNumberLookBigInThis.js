const narcissistic = (value) => {
    const digits = String(value).split("");
    const power = digits.length;

    const sum = digits.reduce(
        (acc, digit) => acc + Math.pow(Number(digit), power),
        0
    );

    return sum === value;
};

const isNarcissisticLoop = (value) => {
    const digits = String(value);
    const power = digits.length;

    let sum = 0;

    for (const digit of digits) {
        sum += Math.pow(Number(digit), power);
    }

    return sum === value;
};

const isNarcissisticMap = (value) => {
    const digits = String(value).split("");
    const power = digits.length;

    const sum = digits
        .map((digit) => Math.pow(Number(digit), power))
        .reduce((a, b) => a + b, 0);

    return sum === value;
};

const isNarcissisticArrayFrom = (value) => {
    const digits = Array.from(String(value), Number);
    const power = digits.length;

    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

    return sum === value;
};