const moveTen = (s) => {
    return s
        .split("")
        .map((char) => {
            if (char >= "a" && char <= "z") {
                return String.fromCharCode(
                    ((char.charCodeAt(0) - 97 + 10) % 26) + 97
                );
            }
            return char;
        })
        .join("");
};

const advanceLettersByTen = (s) => {
    return s
        .split("")
        .map((letter) => {
            if (letter >= "a" && letter <= "z") {
                return String.fromCharCode(
                    ((letter.charCodeAt(0) - 97 + 10) % 26) + 97
                );
            }
            return letter;
        })
        .join("");
};

const translateByTen = (s) => {
    return s
        .split("")
        .map((c) => {
            if (c >= "a" && c <= "z") {
                return String.fromCharCode(
                    ((c.charCodeAt(0) - 97 + 10) % 26) + 97
                );
            }
            return c;
        })
        .join("");
};