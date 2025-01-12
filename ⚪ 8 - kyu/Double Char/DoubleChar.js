const doubleChar = (str) =>
    str
        .split("")
        .map((char) => char + char)
        .join("");

const doubleCharacters = (str) => {
    let result = "";

    for (const char of str) result += char + char;

    return result;
};

const duplicateChars = (str) =>
    str.split("").reduce((acc, char) => acc + char + char, "");

const doubleEachCharacter = (str) => str.replace(/./g, (char) => char + char);