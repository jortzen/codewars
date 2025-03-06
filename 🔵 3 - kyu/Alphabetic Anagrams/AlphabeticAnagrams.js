const listPosition = (word) => {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    const count = {};
    [...word].forEach((c) => (count[c] = (count[c] || 0) + 1));

    let rank = 1;
    for (let i = 0; i < word.length; i++) {
        for (let char in count) {
            if (char < word[i] && count[char]) {
                count[char]--;
                rank +=
                    factorial(word.length - 1 - i) /
                    Object.values(count).reduce((a, c) => a * factorial(c), 1);
                count[char]++;
            }
        }
        count[word[i]]--;
    }
    return rank;
};

const rankAnagram = (word) => {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    const count = new Map();
    [...word].forEach((c) => count.set(c, (count.get(c) || 0) + 1));

    let rank = 1;
    for (let i = 0; i < word.length; i++) {
        const remaining = word.length - i - 1;
        const sortedKeys = [...count.keys()].sort();

        for (let char of sortedKeys) {
            if (char < word[i] && count.get(char)) {
                count.set(char, count.get(char) - 1);
                rank +=
                    factorial(remaining) /
                    [...count.values()].reduce((a, c) => a * factorial(c), 1);
                count.set(char, count.get(char) + 1);
            }
        }
        count.set(word[i], count.get(word[i]) - 1);
    }
    return rank;
};

const recursiveAnagramRank = (word) => {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

    const count = {};
    for (let char of word) count[char] = (count[char] || 0) + 1;

    const getRank = (prefix = "") => {
        if (prefix.length === word.length) return 1;

        let rank = 0;
        for (let char of Object.keys(count).sort()) {
            if (count[char]) {
                count[char]--;
                if (char < word[prefix.length]) {
                    rank +=
                        factorial(word.length - prefix.length - 1) /
                        Object.values(count).reduce(
                            (a, c) => a * factorial(c),
                            1
                        );
                } else if (char === word[prefix.length]) {
                    rank += getRank(prefix + char);
                    count[char]++;
                    break;
                }
                count[char]++;
            }
        }
        return rank;
    };

    return getRank();
};