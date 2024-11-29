const high = (x) => {
    return x.split(" ").reduce(
        (highest, word) => {
            const score = [...word].reduce(
                (sum, char) => sum + (char.charCodeAt(0) - 96),
                0
            );
            return score > highest.score ? { word, score } : highest;
        },
        { word: "", score: 0 }
    ).word;
};

const highSort = (x) => {
    return x
        .split(" ")
        .map((word) => ({
            word,
            score: [...word].reduce(
                (sum, char) => sum + (char.charCodeAt(0) - 96),
                0
            ),
        }))
        .sort(
            (a, b) => b.score - a.score || x.indexOf(a.word) - x.indexOf(b.word)
        )[0].word;
};

const highForEach = (x) => {
    const words = x.split(" ");

    let highestScore = 0;
    let highestWord = "";

    words.forEach((word) => {
        const score = [...word].reduce(
            (sum, char) => sum + (char.charCodeAt(0) - 96),
            0
        );
        if (score > highestScore) {
            highestScore = score;
            highestWord = word;
        }
    });

    return highestWord;
};

const highMap = (x) => {
    const scores = x
        .split(" ")
        .map((word) =>
            [...word].reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0)
        );

    const maxIndex = scores.indexOf(Math.max(...scores));
    
    return x.split(" ")[maxIndex];
};
