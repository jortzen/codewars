const getLengthOfMissingArray = (arrays) => {
    if (
        !arrays ||
        arrays.length === 0 ||
        arrays.some((arr) => !arr || arr.length === 0)
    )
        return 0;
    let lengths = arrays.map((arr) => arr.length).sort((a, b) => a - b);
    return lengths.find((len, i) => len + 1 !== lengths[i + 1]) + 1;
};

const missingArraySize = (arrays) => {
    if (
        !arrays ||
        arrays.length === 0 ||
        arrays.some((arr) => !arr || arr.length === 0)
    )
        return 0;
    let lengths = arrays.map((arr) => arr.length).sort((a, b) => a - b);
    let expectedSum =
        ((lengths[0] + lengths[lengths.length - 1]) * (lengths.length + 1)) / 2;
    return expectedSum - lengths.reduce((sum, len) => sum + len, 0);
};

const getMissingArrayLength = (arrays) => {
    if (
        !arrays ||
        arrays.length === 0 ||
        arrays.some((arr) => !arr || arr.length === 0)
    )
        return 0;
    let lengths = arrays.map((arr) => arr.length).sort((a, b) => a - b);
    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 !== lengths[i + 1]) return lengths[i] + 1;
    }
};