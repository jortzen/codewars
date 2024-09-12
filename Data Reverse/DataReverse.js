const dataReverse = (data) => {
    const segmentSize = 8;

    let reversed = [];

    for (let i = data.length; i > 0; i -= segmentSize) {
        reversed = reversed.concat(data.slice(i - segmentSize, i));
    }

    return reversed;
};

const flipByteOrder = (data) => {
    const segmentSize = 8;

    return data.reduceRight((acc, _, i) => {
        if (i % segmentSize === 0) {
            acc = acc.concat(data.slice(i, i + segmentSize));
        }

        return acc;
    }, []);
};

const reverseData = (data) => {
    return data
        .reduce(
            (acc, _, i, arr) =>
                i % 8 === 0 ? [arr.slice(i, i + 8), ...acc] : acc,
            []
        )
        .flat();
};
