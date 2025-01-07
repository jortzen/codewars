const alphanumeric = (string) => /^[a-zA-Z0-9]+$/.test(string);

const isAlphanumericEvery = (string) =>
    string.length > 0 &&
    string.split("").every((char) => /[a-zA-Z0-9]/.test(char));

const isAlphanumericCharCheck = (string) => {
    if (!string.length) return false;

    for (const char of string) {
        const code = char.charCodeAt(0);
        if (
            !(code >= 48 && code <= 57) &&
            !(code >= 65 && code <= 90) &&
            !(code >= 97 && code <= 122)
        ) {
            return false;
        }
    }

    return true;
};