const rot13 = (message) => {
    return message
        .split("")
        .map((char) => {
            if (/[a-zA-Z]/.test(char)) {
                const base = char <= "Z" ? 65 : 97;
                return String.fromCharCode(
                    ((char.charCodeAt(0) - base + 13) % 26) + base
                );
            }
            return char;
        })
        .join("");
};

const rot13Regex = (message) => {
    return message.replace(/[a-zA-Z]/g, (char) => {
        const base = char <= "Z" ? 65 : 97;

        return String.fromCharCode(
            ((char.charCodeAt(0) - base + 13) % 26) + base
        );
    });
};

const rot13Reduce = (message) => {
    return message.split("").reduce((acc, char) => {
        if (/[a-zA-Z]/.test(char)) {
            const base = char <= "Z" ? 65 : 97;
            acc += String.fromCharCode(
                ((char.charCodeAt(0) - base + 13) % 26) + base
            );
        } else {
            acc += char;
        }
        return acc;
    }, "");
};
