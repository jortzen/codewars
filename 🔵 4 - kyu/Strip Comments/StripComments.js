const solution = (text, markers) =>
    text
        .split("\n")
        .map((line) =>
            markers
                .reduce((acc, marker) => acc.split(marker)[0], line)
                .trimEnd()
        )
        .join("\n");

const stripCommentsReduce = (text, markers) =>
    text
        .split("\n")
        .reduce(
            (acc, line) => [
                ...acc,
                markers.reduce((l, m) => l.split(m)[0], line).trimEnd(),
            ],
            []
        )
        .join("\n");

const stripCommentsReplace = (text, markers) =>
    text
        .split("\n")
        .map((line) =>
            markers
                .reduce(
                    (acc, marker) =>
                        acc.replace(new RegExp(`\\s*\\${marker}.*`), ""),
                    line
                )
                .trimEnd()
        )
        .join("\n");