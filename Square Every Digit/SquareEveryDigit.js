const squareDigits = (num) => {
    return +num
        .toString()
        .split("")
        .map((digit) => digit ** 2)
        .join("");
};

const squareAndConcat = (num) =>
    +[...`${num}`].map((digit) => digit ** 2).join("");

const squareDigitsForLoop = (num) => {
    let result = "";
    const string = num.toString();

    for (let index = 0; index < string.length; index++) {
        result += string[index] ** 2;
    }

    return +result;
};