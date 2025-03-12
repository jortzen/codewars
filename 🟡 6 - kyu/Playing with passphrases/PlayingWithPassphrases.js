const playPass = (s, n) => {
    return s
        .split("")
        .map((char, i) => {
            if (/[A-Z]/.test(char)) {
                let shifted = String.fromCharCode(
                    ((char.charCodeAt(0) - 65 + n) % 26) + 65
                );
                return i % 2 === 0
                    ? shifted.toUpperCase()
                    : shifted.toLowerCase();
            }
            if (/[0-9]/.test(char)) {
                return (9 - Number(char)).toString();
            }
            return char;
        })
        .reverse()
        .join("");
};

const playPassV2 = (s, n) => {
    let transformed = s.replace(/[A-Z0-9]/g, (char, i) => {
        if (/[A-Z]/.test(char)) {
            let shifted = String.fromCharCode(
                ((char.charCodeAt(0) - 65 + n) % 26) + 65
            );
            return i % 2 === 0 ? shifted.toUpperCase() : shifted.toLowerCase();
        }
        return (9 - Number(char)).toString();
    });

    return [...transformed].reverse().join("");
};

const playPassV3 = (s, n) => {
    return s.split("").reduce((acc, char, i) => {
        if (/[A-Z]/.test(char)) {
            let shifted = String.fromCharCode(
                ((char.charCodeAt(0) - 65 + n) % 26) + 65
            );
            char = i % 2 === 0 ? shifted.toUpperCase() : shifted.toLowerCase();
        } else if (/[0-9]/.test(char)) {
            char = (9 - Number(char)).toString();
        }
        return char + acc; 
    }, "");
};