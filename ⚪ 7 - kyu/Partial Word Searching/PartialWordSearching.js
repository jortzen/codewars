const wordSearch = (query, seq) => {
    const lowerCaseQuery = query.toLowerCase();

    const results = seq.filter((str) =>
        str.toLowerCase().includes(lowerCaseQuery)
    );

    return results.length ? results : ["Empty"];
};

const searchStrings = (query, seq) =>
    seq.filter((str) => str.toLowerCase().includes(query.toLowerCase())).length
        ? seq.filter((str) => str.toLowerCase().includes(query.toLowerCase()))
        : ["Empty"];

const findStringsContainingQuery = (query, seq) => {
    const lowerCaseQuery = query.toLowerCase();
    const results = [];
    for (let i = 0; i < seq.length; i++) {
        if (seq[i].toLowerCase().includes(lowerCaseQuery)) {
            results.push(seq[i]);
        }
    }
    return results.length ? results : ["Empty"];
};