const generateHashtag = (str) => {
    const result =
        "#" +
        str
            .trim()
            .split(/\s+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");

    return result.length > 1 && result.length <= 140 ? result : false;
};

const hashtagRegex = (str) => {
    const result =
        "#" +
        str.replace(/\b\w/g, (char) => char.toUpperCase()).replace(/\s+/g, "");

    return result.length > 1 && result.length <= 140 ? result : false;
};

const hashtagReduce = (str) => {
    const result =
        "#" +
        str
            .trim()
            .split(/\s+/)
            .reduce(
                (acc, word) =>
                    acc + word.charAt(0).toUpperCase() + word.slice(1),
                ""
            );

    return result.length > 1 && result.length <= 140 ? result : false;
};