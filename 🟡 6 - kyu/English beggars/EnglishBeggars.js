const beggars = (values, n) =>
    Array.from({ length: n }, (_, i) =>
        values
            .filter((_, idx) => idx % n === i)
            .reduce((sum, val) => sum + val, 0)
    );

const beggarSums = (values, n) => {
    return Array(n)
        .fill(0)
        .map((_, i) => {
            return values.reduce(
                (sum, val, idx) => (idx % n === i ? sum + val : sum),
                0
            );
        });
};

const splitEarnings = (values, n) =>
    Array(n)
        .fill(0)
        .map((_, i) =>
            values
                .slice(i)
                .filter((_, idx) => idx % n === 0)
                .reduce((sum, val) => sum + val, 0)
        );

const calculateBeggars = (values, n) => {
    const result = Array(n).fill(0);

    values.forEach((value, idx) => {
        result[idx % n] += value;
    });
    
    return result;
};