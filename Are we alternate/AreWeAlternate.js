const isAlt = (word) => {
    const vowels = "aeiou";

    const isVowel = (char) => vowels.includes(char);

    return word
        .split("")
        .map(isVowel)
        .every((val, index, arr) => index === 0 || arr[index - 1] !== val);
};

const hasAlternatingChars = (word) => !/([aeiou]{2}|[^aeiou]{2})/.test(word);

const checkAlternate = (word) => {
    const vowels = "aeiou";

    const isVowel = (char) => vowels.includes(char);

    for (let index = 0; index < word.length - 1; index++) {
        if (
            (isVowel(word[index]) && isVowel(word[index + 1])) ||
            (!isVowel(word[index]) && !isVowel(word[index + 1]))
        ) {
            return false;
        }
    }

    return true;
};
