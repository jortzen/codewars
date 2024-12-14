const partsSums = (ls) => {
    let total = ls.reduce((a, b) => a + b, 0);
    return ls.map((_, i) => (total -= i === 0 ? 0 : ls[i - 1])).concat(0);
};

const partsSumsPrefix = (ls) => {
    const result = new Array(ls.length + 1);
    result[ls.length] = 0;

    for (let i = ls.length - 1; i >= 0; i--) {
        result[i] = result[i + 1] + ls[i];
    }

    return result;
};

const partsSumsIterative = (ls) => {
    const result = [];
    let sum = ls.reduce((acc, num) => acc + num, 0);
    
    for (let num of ls) {
        result.push(sum);
        sum -= num;
    }

    result.push(0); 
    return result;
};