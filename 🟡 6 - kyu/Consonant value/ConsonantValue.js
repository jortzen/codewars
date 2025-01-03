const solve = (s) => {
    const consonants = s.match(/[^aeiou]+/g) || [];

    return Math.max(
        ...consonants.map((substr) =>
            [...substr].reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0)
        )
    );
};

const maxConsonantValueIterative = (s) => {
    let maxSum = 0,
        currentSum = 0;

    for (let char of s) {
        if (!"aeiou".includes(char)) {
            currentSum += char.charCodeAt(0) - 96;
            maxSum = Math.max(maxSum, currentSum);
        } else {
            currentSum = 0;
        }
    }

    return maxSum;
};

const maxConsonantValueSplit = (s) => {
    return Math.max(
        ...s
            .split(/[aeiou]/)
            .map((substr) =>
                [...substr].reduce(
                    (sum, char) => sum + char.charCodeAt(0) - 96,
                    0
                )
            )
    );
};