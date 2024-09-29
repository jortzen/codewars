const enough = (cap, on, wait) => {
    return Math.max(0, on + wait - cap);
};

const fitOrNot = (cap, on, wait) => {
    return on + wait <= cap ? 0 : on + wait - cap;
};

const checkCapacity = (cap, on, wait) => {
    return on + wait > cap ? on + wait - cap : 0;
};