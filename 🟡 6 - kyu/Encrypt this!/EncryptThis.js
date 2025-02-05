const encryptThis = (text) =>
    text
        .split(" ")
        .map((word) =>
            word.length > 2
                ? word.charCodeAt(0) +
                  word[word.length - 1] +
                  word.slice(2, -1) +
                  word[1]
                : word.length === 2
                ? word.charCodeAt(0) + word[1]
                : word.charCodeAt(0) || ""
        )
        .join(" ");

const swapEncrypt = (text) =>
    text
        .split(" ")
        .map(
            (w) =>
                `${w.charCodeAt(0)}${
                    w.length > 2
                        ? w[w.length - 1] + w.slice(2, -1) + w[1]
                        : w.slice(1)
                }`
        )
        .join(" ");

const simpleEncrypt = (text) =>
    text
        .split(" ")
        .map((word) => {
            const [first, ...rest] = word;
            if (rest.length > 1)
                [rest[0], rest[rest.length - 1]] = [
                    rest[rest.length - 1],
                    rest[0],
                ];
            return `${first.charCodeAt(0)}${rest.join("")}`;
        })
        .join(" ");