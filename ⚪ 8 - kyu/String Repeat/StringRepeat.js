const repeatStr = (n, s) => {
    let result = "";

    for (let i = 0; i < n; i++) {
        result += s;
    }

    return result;
};

const repeatStrMethod = (n, s) => s.repeat(n);

const repeatStringArray = (n, s) => new Array(n).fill(s).join("");