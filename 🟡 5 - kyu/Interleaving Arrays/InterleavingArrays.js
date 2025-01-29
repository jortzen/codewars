const interleave = (...arrays) =>
    Array.from({ length: Math.max(...arrays.map((a) => a.length)) }, (_, i) =>
        arrays.map((arr) => arr[i] ?? null)
    ).flat();

const mergeAlternating = (...arrays) =>
    arrays.reduce((acc, arr) => (arr.length > acc ? arr.length : acc), 0)
        ? Array.from({
              length: Math.max(...arrays.map((a) => a.length)),
          }).flatMap((_, i) => arrays.map((arr) => arr[i] ?? null))
        : [];

const alternateMerge = (...arrays) => {
    const maxLength = Math.max(...arrays.map((arr) => arr.length));
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        arrays.forEach((arr) => result.push(arr[i] ?? null));
    }

    return result;
};