const likes = (names) => {
    const [first, second, third] = names;
    const count = names.length;

    switch (count) {
        case 0:
            return "no one likes this";
        case 1:
            return `${first} likes this`;
        case 2:
            return `${first} and ${second} like this`;
        case 3:
            return `${first}, ${second} and ${third} like this`;
        default:
            return `${first}, ${second} and ${count - 2} others like this`;
    }
};

const likesDestructuring = (names) => {
    const [first, second, third, ...others] = names;
    const length = names.length;

    switch (length) {
        case 0:
            return "no one likes this";
        case 1:
            return `${first} likes this`;
        case 2:
            return `${first} and ${second} like this`;
        case 3:
            return `${first}, ${second} and ${third} like this`;
        default:
            return `${first}, ${second} and ${
                others.length + 1
            } others like this`;
    }
};

const likesWithFormat = (names) => {
    const format =
        {
            0: "no one likes this",
            1: "{0} likes this",
            2: "{0} and {1} like this",
            3: "{0}, {1} and {2} like this",
        }[names.length] || "{0}, {1} and {n} others like this";

    const [first, second, third, ...others] = names;
    
    const formatMessage = format
        .replace("{0}", first || "")
        .replace("{1}", second || "")
        .replace("{2}", third || "")
        .replace("{n}", others.length);

    return formatMessage;
};
