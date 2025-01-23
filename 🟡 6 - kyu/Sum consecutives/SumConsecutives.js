const sumConsecutives = (s) => {
    let result = [];
    let sum = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            sum += s[i];
        } else {
            result.push(sum);
            sum = s[i];
        }
    }
    result.push(sum);

    return result;
};

const sumConsecutiveReduce = (s) => {
    return s.reduce((acc, curr, i) => {
        if (curr === s[i - 1]) {
            acc[acc.length - 1] += curr;
        } else {
            acc.push(curr);
        }
        return acc;
    }, []);
};