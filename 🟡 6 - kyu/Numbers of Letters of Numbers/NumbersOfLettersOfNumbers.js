const numbersOfLetters = (integer, path = []) => {
    const digitToWord = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const numToWord = (num) =>
        num
            .toString()
            .split("")
            .map((digit) => digitToWord[digit])
            .join("");

    const current = numToWord(integer);
    path.push(current);
    const next = digitToWord[current.length];

    return current === next ? path : numbersOfLetters(current.length, path);
};

const lettersPathRecursive = (integer, path = []) => {
    const digitToWord = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const numToWord = (num) =>
        num
            .toString()
            .split("")
            .map((d) => digitToWord[d])
            .join("");

    const current = numToWord(integer);
    path.push(current);

    if (current === "four") {
        return path;
    }

    return lettersPathRecursive(current.length, path);
};

const equilibriumJourney = (integer) => {
    const digitToWord = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const numToWord = (num) =>
        num
            .toString()
            .split("")
            .map((d) => digitToWord[d])
            .join("");

    const path = [];
    let current = numToWord(integer);

    while (current !== "four") {
        path.push(current);
        current = numToWord(current.length);
    }

    path.push("four");
    return path;
};