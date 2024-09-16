const diff = (a, b) =>
    [...new Set([...a, ...b])]
        .filter((x) => a.includes(x) !== b.includes(x))
        .sort();

const uniqueDiff = (a, b) => 
    [...new Set(a.concat(b).filter(x => a.includes(x) ^ b.includes(x)))].sort();

const setDifference = (a, b) => {
    const setA = new Set(a);
    const setB = new Set(b);
    
    const diffA = [...setA].filter(x => !setB.has(x));
    const diffB = [...setB].filter(x => !setA.has(x));
    
    return [...diffA, ...diffB].sort();
};