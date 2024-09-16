const topThreeWords = (text) => {
    const wordCounts = new Map();
    const words = text.toLowerCase().match(/\b[a-z']+\b/g) || [];

    for (let word of words) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }

    return [...wordCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map((entry) => entry[0]);
};

const topWordOccurrences = (text) => {
    const wordCounts = {};
    const words = text.toLowerCase().match(/\b[a-z']+\b/g) || [];

    words.forEach((word) => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    return Object.entries(wordCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([word]) => word);
};

const findMostFrequentWords = (text) => {
    const lowerCaseText = text.toLowerCase();
    const wordPattern = /\b[a-z']+\b/g;
    const wordsArray = lowerCaseText.match(wordPattern) || [];

    const wordCounts = new Map();

    wordsArray.forEach((word) => {
        const currentCount = wordCounts.get(word) || 0;
        wordCounts.set(word, currentCount + 1);
    });

    const entriesArray = Array.from(wordCounts.entries());
    const sortedEntries = entriesArray.sort(
        ([, countA], [, countB]) => countB - countA
    );

    const topThreeEntries = sortedEntries.slice(0, 3);
    const topThreeWords = topThreeEntries.map(([word]) => word);

    return topThreeWords;
};