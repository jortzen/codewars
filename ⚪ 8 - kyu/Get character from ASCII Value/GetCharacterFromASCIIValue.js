const getChar = (c) => String.fromCharCode(c);

const asciiCharacter = (c) => {
    switch (true) {
        case c >= 0 && c <= 127:
            return String.fromCharCode(c);
        default:
            return null;
    }
};

const findAsciiChar = (c) => {
    const validChars = Array.from({ length: 128 }, (_, i) =>
        String.fromCharCode(i)
    );
    return c >= 0 && c < validChars.length ? validChars[c] : null;
};