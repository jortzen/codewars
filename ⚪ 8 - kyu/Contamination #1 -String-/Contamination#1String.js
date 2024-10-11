const contamination = (text, char) =>
    text && char ? char.repeat(text.length) : "";

const replaceWithChar = (text, char) =>
    text && char ? [...text].fill(char).join("") : "";

const transformText = (text, char) => {
    return char.repeat(text.length);
};

const infectText = (text, char) => {
    return text.replace(/./g, char);
};