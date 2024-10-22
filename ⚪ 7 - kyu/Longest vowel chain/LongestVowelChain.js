const solve = (s) => {
    return s
        .split(/[^aeiou]/)
        .reduce((max, str) => Math.max(max, str.length), 0);
};

const longestVowelSubstring = (s) => {
    const vowelSubstrings = s.match(/[aeiou]+/g);

    return vowelSubstrings
        ? Math.max(...vowelSubstrings.map((str) => str.length))
        : 0;
};

const maxVowelSeq = (s) => {
    let maxLen = 0,
        currentLen = 0;

    for (let char of s) {
        if ("aeiou".includes(char)) {
            currentLen++;
            maxLen = Math.max(maxLen, currentLen);
        } else {
            currentLen = 0;
        }
    }
    
    return maxLen;
};