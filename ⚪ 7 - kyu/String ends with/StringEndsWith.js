const solution = (str, ending) => str.endsWith(ending);

const checkEndWithSubstring = (str, ending) =>
    str.substring(str.length - ending.length) === ending;

const checkEndWithSlice = (str, ending) =>
    ending === "" || str.slice(-ending.length) === ending;