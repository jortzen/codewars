const dup = (s) => s.map((word) => word.replace(/(.)\1+/g, "$1"));

const cleanDuplicates = (s) =>
    s.map((word) =>
        word
            .split("")
            .filter((c, i, arr) => c !== arr[i - 1])
            .join("")
    );

const deduplicateWords = (s) =>
    s.map((word) =>
        [...word].reduce(
            (acc, char) => acc + (char !== acc.slice(-1) ? char : ""),
            ""
        )
    );