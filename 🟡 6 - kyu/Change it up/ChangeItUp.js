const changer = (str) =>
    [...str]
        .map((char) => {
            if (!/[a-zA-Z]/.test(char)) return char;
            const shifted = String.fromCharCode(
                ((char.toLowerCase().charCodeAt(0) - 96) % 26) + 97
            );

            return "aeiou".includes(shifted)
                ? shifted.toUpperCase()
                : shifted.toLowerCase();
        })
        .join("");

const changerReplaceRegex = (str) =>
    str.replace(/[a-zA-Z]/g, (char) => {
        const shifted = String.fromCharCode(
            ((char.toLowerCase().charCodeAt(0) - 96) % 26) + 97
        );

        return "aeiou".includes(shifted)
            ? shifted.toUpperCase()
            : shifted.toLowerCase();
    });

const changerCharCode = (str) =>
    [...str]
        .map((c) => {
            if (!/[a-z]/i.test(c)) return c;
            let shifted = String.fromCharCode(
                ((c.toLowerCase().charCodeAt(0) - 96) % 26) + 97
            );
            return "aeiou".includes(shifted) ? shifted.toUpperCase() : shifted;
        })
        .join("");
