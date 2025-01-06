const pyramid = (n) =>
    Array.from({ length: n }, (_, i) => Array(i + 1).fill(1));

const pyramidWithMap = (n) => [...Array(n)].map((_, i) => Array(i + 1).fill(1));

const pyramidWithReduce = (n) =>
    [...Array(n)].reduce((acc, _, i) => {
        acc.push(Array(i + 1).fill(1));
        return acc;
    }, []);

const pyramidWithLoop = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(Array(i).fill(1));
    }
    
    return result;
};
