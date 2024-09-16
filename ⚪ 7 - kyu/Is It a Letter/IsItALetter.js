const isItLetter = (character) => {
    return /[a-zA-Z]/.test(character);
};

const isItLetterByIsNaN = (character) => {
    return isNaN(character) && character.toUpperCase() !== character.toLowerCase();
};

const isItLetterByCharCode = (character) => {
    const code = character.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};