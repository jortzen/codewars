const longestPalindrome = (s) => {
    if (!s) return 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const substring = s.slice(i, j + 1);
            if (substring === substring.split("").reverse().join("")) {
                maxLen = Math.max(maxLen, substring.length);
            }
        }
    }

    return maxLen;
};

const longestPalindromeExpandCenter = (s) => {
    if (!s) return 0;
    let maxLen = 0;

    const expandFromCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        const oddLength = expandFromCenter(i, i);
        const evenLength = expandFromCenter(i, i + 1);
        maxLen = Math.max(maxLen, oddLength, evenLength);
    }

    return maxLen;
};