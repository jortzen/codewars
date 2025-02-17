const averageString = (str) => {
    const numMap = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    const words = str.split(" ");
    if (words.some((word) => !(word in numMap)) || !str) return "n/a";

    const sum = words.reduce((acc, word) => acc + numMap[word], 0);
    return (
        Object.keys(numMap).find(
            (key) => numMap[key] === Math.floor(sum / words.length)
        ) || "n/a"
    );
};

const averageStringArray = (str) => {
    const numWords = [
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

    const words = str.split(" ");
    if (!str || words.some((word) => !numWords.includes(word))) return "n/a";

    const sum = words.reduce((acc, word) => acc + numWords.indexOf(word), 0);
    return numWords[Math.floor(sum / words.length)] || "n/a";
};

const averageStringLoop = (str) => {
    const numWords = [
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

    if (!str) return "n/a";

    let sum = 0,
        count = 0;

    for (const word of str.split(" ")) {
        const num = numWords.indexOf(word);
        if (num === -1) return "n/a";
        sum += num;
        count++;
    }

    return numWords[Math.floor(sum / count)] || "n/a";
};