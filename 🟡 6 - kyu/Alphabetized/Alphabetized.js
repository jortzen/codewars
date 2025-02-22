const alphabetized = (s) =>
    [...s.replace(/[^a-zA-Z]/g, "")]
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .join("");

const alphabetizedMapSort = (s) =>
    [...s.replace(/[^a-zA-Z]/g, "")]
        .map((char) => ({ char, lower: char.toLowerCase() }))
        .sort((a, b) => a.lower.localeCompare(b.lower))
        .map((obj) => obj.char)
        .join("");

const alphabetizedCharCode = (s) =>
    [...s.replace(/[^a-zA-Z]/g, "")]
        .sort(
            (a, b) =>
                a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
        )
        .join("");

const alphabetizedFilterReduce = (s) =>
    [...s]
        .filter((c) => /[a-zA-Z]/.test(c))
        .reduce((acc, char) => {
            const idx = acc.findIndex(
                (c) => c.toLowerCase() > char.toLowerCase()
            );
            acc.splice(idx === -1 ? acc.length : idx, 0, char);
            return acc;
        }, [])
        .join("");