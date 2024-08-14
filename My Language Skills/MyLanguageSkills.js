const myLanguages = (results) => {
    const languages = Object.keys(results);
    const resultsArr = Object.values(results);

    return languages
        .filter((_, index) => resultsArr[index] >= 60)
        .sort((a, b) => results[b] - results[a]);
};

const getLanguagesByScore = (data) =>
    Object.entries(data)
        .filter(([_, score]) => score >= 60)
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
        .map(([language]) => language);

const filterAndSort = (data) => {
    const result = [];

    for (const [lang, score] of Object.entries(data)) {
        if (score >= 60) {
            result.push([lang, score]);
        }
    }

    return result
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
        .map(([language]) => language);
};
