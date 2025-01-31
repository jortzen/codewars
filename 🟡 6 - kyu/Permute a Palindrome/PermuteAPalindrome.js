const permuteAPalindrome = (str) => {
    let oddChars = new Set();
    for (const char of str)
        oddChars.has(char) ? oddChars.delete(char) : oddChars.add(char);

    return oddChars.size <= 1;
};

const isPossiblePalindrome = (str) =>
    Object.values(
        [...str].reduce(
            (acc, char) => ((acc[char] = (acc[char] || 0) + 1), acc),
            {}
        )
    ).filter((count) => count % 2).length <= 1;

const checkPalindromePermutation = (str) => {
    let freq = new Map();
    for (let char of str) freq.set(char, (freq.get(char) || 0) + 1);

    return [...freq.values()].filter((count) => count % 2).length <= 1;
};

const canRearrangePalindrome = (str) => {
    let freq = {},
        oddCount = 0;

    for (let i = 0; i < str.length; i++) freq[str[i]] = (freq[str[i]] || 0) + 1;
    for (let key in freq) if (freq[key] % 2) oddCount++;

    return oddCount <= 1;
};