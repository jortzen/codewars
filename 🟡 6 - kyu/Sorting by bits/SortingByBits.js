const sortByBit = (arr) => {
    const countBits = (n) => n.toString(2).split("1").length - 1;
    arr.sort((a, b) => {
        const bitsA = countBits(a);
        const bitsB = countBits(b);
        return bitsA - bitsB || a - b;
    });
};

const sortWithBitCount = (arr) => {
    const countBits = (n) => {
        let count = 0;
        while (n) {
            n &= n - 1;
            count++;
        }
        return count;
    };
    arr.sort((a, b) => {
        const bitsA = countBits(a);
        const bitsB = countBits(b);
        return bitsA - bitsB || a - b;
    });
};

const smartBitSorter = (arr) => {
    const bitCache = new Map();
    const countBits = (n) => {
        if (bitCache.has(n)) return bitCache.get(n);
        const count = n.toString(2).split("1").length - 1;
        bitCache.set(n, count);
        return count;
    };
    arr.sort((a, b) => {
        const bitsA = countBits(a);
        const bitsB = countBits(b);
        return bitsA - bitsB || a - b;
    });
};