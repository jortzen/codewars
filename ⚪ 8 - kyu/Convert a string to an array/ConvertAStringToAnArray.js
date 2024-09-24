const stringToArray = (string) => string.split(" ");

const reduceToArray = (string) =>
    string.split("").reduce(
        (arr, char) => {
            if (char === " ") arr.push("");
            else arr[arr.length - 1] += char;
            return arr;
        },
        [""]
    );

const regexToArray = (string) => string.match(/\S+/g) || [];