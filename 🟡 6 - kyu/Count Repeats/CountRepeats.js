const countRepeats = (str) => {
    let removalCount = 0;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            removalCount++;
        }
    }

    return removalCount;
};

const countRepeatsForEach = (str) => {
    let removalCount = 0;

    str.split("").forEach((char, idx, arr) => {
        if (char === arr[idx - 1]) {
            removalCount++;
        }
    });

    return removalCount;
};

const countRepeatsRegex = (str) => {
    return (str.match(/(.)\1+/g) || []).reduce((acc, match) => acc + match.length - 1, 0);
};