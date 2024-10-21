const letterPattern = (words) =>
    words.reduce((pattern, word) =>
        [...pattern].map((char, i) => (char === word[i] ? char : "*")).join("")
    );

const letterPatternLoop = (words) => {
    let result = "";

    for (let i = 0; i < words[0].length; i++) {
        let char = words[0][i];

        for (let j = 1; j < words.length; j++) {
            if (words[j][i] !== char) {
                char = "*";
                break;
            }
        }
        result += char;
    }

    return result;
};

const letterPatternFilter = (words) =>
    words[0]
        .split("")
        .map((char, i) =>
            words.filter((word) => word[i] === char).length === words.length
                ? char
                : "*"
        )
        .join("");