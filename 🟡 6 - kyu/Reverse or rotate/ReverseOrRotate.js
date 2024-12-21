const revrot = (str, sz) => {
    if (sz <= 0 || str === "" || sz > str.length) return "";

    let result = "";

    for (let i = 0; i + sz <= str.length; i += sz) {
        const chunk = str.slice(i, i + sz);
        const sum = chunk
            .split("")
            .reduce((sum, digit) => sum + Number(digit), 0);
        if (sum % 2 === 0) {
            result += chunk.split("").reverse().join("");
        } else {
            result += chunk.slice(1) + chunk[0];
        }
    }

    return result;
};

const revrotReduce = (str, sz) => {
    if (sz <= 0 || str === "" || sz > str.length) return "";

    return [...Array(Math.floor(str.length / sz))]
        .map((_, i) => str.slice(i * sz, i * sz + sz))
        .reduce((result, chunk) => {
            const sum = chunk
                .split("")
                .reduce((sum, digit) => sum + Number(digit), 0);
            return (
                result +
                (sum % 2 === 0
                    ? chunk.split("").reverse().join("")
                    : chunk.slice(1) + chunk[0])
            );
        }, "");
};

const revrotRegex = (str, sz) => {
    if (sz <= 0 || str === "" || sz > str.length) return "";

    return (str.match(new RegExp(`.{${sz}}`, "g")) || [])
        .map((chunk) => {
            const sum = chunk
                .split("")
                .reduce((sum, digit) => sum + Number(digit), 0);
            return sum % 2 === 0
                ? chunk.split("").reverse().join("")
                : chunk.slice(1) + chunk[0];
        })
        .join("");
};