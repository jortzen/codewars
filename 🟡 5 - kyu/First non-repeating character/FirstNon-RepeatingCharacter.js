const firstNonRepeatingLetter = (s) => {
    const frequencyMap = new Map();

    for (const char of s.toLowerCase()) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    for (const char of s) {
        if (frequencyMap.get(char.toLowerCase()) === 1) {
            return char;
        }
    }

    return "";
};

const findFirstUniqueChar = (s) => {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (
            s.toLowerCase().indexOf(char.toLowerCase()) ===
            s.toLowerCase().lastIndexOf(char.toLowerCase())
        ) {
            return char;
        }
    }
    return "";
};

const getFirstNonRepeating = (s) => {
    return (
        s.split("").find(
            (char) =>
                s
                    .toLowerCase()
                    .split("")
                    .filter((c) => c === char.toLowerCase()).length === 1
        ) || ""
    );
};