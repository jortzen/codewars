const getMiddle = (s) => {
    const length = s.length;
    const middle = Math.floor(length / 2);

    return length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
};

const extractMiddle = (s) => {
    const len = s.length;
    const midIndex = Math.floor(len / 2);

    return len % 2 === 0 ? s.slice(midIndex - 1, midIndex + 1) : s[midIndex];
};

const getCentral = (s) => {
    const size = s.length;
    const mid = Math.floor(size / 2);
    
    return size % 2 === 0 ? s.substring(mid - 1, mid + 1) : s[mid];
};