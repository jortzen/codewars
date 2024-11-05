const XO = (str) => {
    const lowerStr = str.toLowerCase();

    return lowerStr.split("x").length - 1 === lowerStr.split("o").length - 1;
};

const countXO = (str) => {
    let countX = 0;
    let countO = 0;

    for (let char of str.toLowerCase()) {
        if (char === "x") countX++;
        if (char === "o") countO++;
    }

    return countX === countO;
};

const validateXO = (str) => {
    const lowerStr = str.toLowerCase();

    const counts = lowerStr.split("").reduce(
        (acc, char) => {
            if (char === "x") acc[0]++;
            if (char === "o") acc[1]++;
            return acc;
        },
        [0, 0]
    );

    return counts[0] === counts[1];
};