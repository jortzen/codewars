const removeChar = (str) => {
    return str.slice(1, -1);
};

const removeEndsSubstring = (str) => str.substring(1, str.length - 1);

const removeEndsReplace = (str) => str.replace(/^.|.$/g, "");