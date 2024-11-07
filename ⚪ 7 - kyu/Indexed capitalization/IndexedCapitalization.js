const capitalize = (s, arr) =>
    s
        .split("")
        .map((char, index) => (arr.includes(index) ? char.toUpperCase() : char))
        .join("");

const capitalizeWithForEach = (s, arr) => {
    let chars = s.split("");

    arr.forEach((index) => {
        if (index < chars.length) chars[index] = chars[index].toUpperCase();
    });

    return chars.join("");
};

const capitalizeWithReduce = (s, arr) =>
    s
        .split("")
        .reduce(
            (acc, char, i) =>
                acc + (arr.includes(i) ? char.toUpperCase() : char),
            ""
        );