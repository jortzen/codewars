const makeLooper = (str) => {
    let i = 0;
    return () => {
        const char = str[i];
        i = (i + 1) % str.length;
        return char;
    };
};

const createLooper = (str) => {
    let i = 0;
    return () => str[i++ % str.length];
};

const rotateLooper = (str) => {
    const chars = [...str];
    return () => chars.push(chars.shift()) && chars[chars.length - 1];
};