const nameShuffler = (str) => str.split(" ").reverse().join(" ");

const nameSwitcher = (str) => {
    let [first, last] = str.split(" ");
    return `${last} ${first}`;
};

const flipNameOrder = (str) =>
    str
        .split(" ")
        .map((_, i, arr) => arr[arr.length - 1 - i])
        .join(" ");