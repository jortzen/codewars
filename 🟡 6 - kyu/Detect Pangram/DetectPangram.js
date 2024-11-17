const isPangramSet = (string) => {
    const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
    const lowerStr = string.toLowerCase();

    for (const char of lowerStr) {
        alphabet.delete(char);
        if (alphabet.size === 0) return true;
    }

    return false;
};

const isPangramRegex = (string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerStr = string.toLowerCase().replace(/[^a-z]/g, "");

    return [...alphabet].every((char) => lowerStr.includes(char));
};

const isPangramReduce = (string) => {
    const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");

    string
        .toLowerCase()
        .split("")
        .reduce((acc, char) => {
            if (alphabet.has(char)) alphabet.delete(char);
            return acc;
        }, []);

    return alphabet.size === 0;
};

const isPangramEvery = (string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerStr = string.toLowerCase();
    
    return [...alphabet].every((char) => lowerStr.includes(char));
};
