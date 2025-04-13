const balancedParens = (n) => {
    const result = [];
    const build = (open, close, str) => {
        if (str.length === n * 2) return result.push(str);
        if (open < n) build(open + 1, close, str + "(");
        if (close < open) build(open, close + 1, str + ")");
    };
    build(0, 0, "");
    return result;
};

const catalanParens = (n) => {
    if (n === 0) return [""];
    return [...Array(n).keys()].flatMap((i) =>
        catalanParens(i).flatMap((left) =>
            catalanParens(n - 1 - i).map((right) => `(${left})${right}`)
        )
    );
};

const iterativeParens = (n) => {
    let result = new Set([""]);
    for (let i = 0; i < n; i++) {
        const temp = new Set();
        result.forEach((str) => {
            for (let j = 0; j <= str.length; j++) {
                const newStr = str.slice(0, j) + "()" + str.slice(j);
                temp.add(newStr);
            }
        });
        result = temp;
    }
    return [...result];
};