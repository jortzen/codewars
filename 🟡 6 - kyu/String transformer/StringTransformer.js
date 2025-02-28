const stringTransformer = (str) =>
    str
        .split(" ")
        .reverse()
        .map((word) =>
            [...word]
                .map((c) =>
                    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
                )
                .join("")
        )
        .join(" ");

const stringTransformRegex = (str) =>
    str
        .replace(/\S+/g, (w) =>
            [...w]
                .map((c) =>
                    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
                )
                .join("")
        )
        .split(" ")
        .reverse()
        .join(" ");

const stringTransformReduce = (str) =>
    str
        .split(" ")
        .reduce(
            (acc, word) => [
                [...word]
                    .map((c) =>
                        c === c.toUpperCase()
                            ? c.toLowerCase()
                            : c.toUpperCase()
                    )
                    .join(""),
                ...acc,
            ],
            []
        )
        .join(" ");