const isAnagram = (test, original) => {
    return (
        test.toLowerCase().split("").sort().join("") ===
        original.toLowerCase().split("").sort().join("")
    );
};

const isAnagramEvery = (test, original) => {
    test = test.toLowerCase();
    original = original.toLowerCase();

    return (
        test.length === original.length &&
        [...test].every(
            (char) => test.split(char).length === original.split(char).length
        )
    );
};

const isAnagramSet = (test, original) => {
    if (test.length !== original.length) return false;

    const testLower = test.toLowerCase();
    const originalLower = original.toLowerCase();

    const uniqueChars = new Set(testLower);
    
    return [...uniqueChars].every(
        (char) =>
            testLower.split(char).length === originalLower.split(char).length
    );
};