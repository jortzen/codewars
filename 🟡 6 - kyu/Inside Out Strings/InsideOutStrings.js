const insideOut = (x) => {
    return x
        .split(" ")
        .map((word) => {
            const len = word.length;
            const mid = Math.floor(len / 2);
            return len % 2 === 0
                ? [...word.slice(0, mid)].reverse().join("") +
                      [...word.slice(mid)].reverse().join("")
                : [...word.slice(0, mid)].reverse().join("") +
                      word[mid] +
                      [...word.slice(mid + 1)].reverse().join("");
        })
        .join(" ");
};

const insideOutTransform = (x) => {
    return x
        .split(" ")
        .map((word) => {
            let len = word.length,
                mid = Math.floor(len / 2);
            let left = word.slice(0, mid).split("").reverse().join("");
            let right = word
                .slice(len % 2 ? mid + 1 : mid)
                .split("")
                .reverse()
                .join("");
            return len % 2 === 0 ? left + right : left + word[mid] + right;
        })
        .join(" ");
};