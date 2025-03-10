const solve = (arr) => {
    const frequencyMap = arr.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
    }, {});

    return arr.sort((a, b) => {
        const freqA = frequencyMap[a];
        const freqB = frequencyMap[b];

        if (freqA === freqB) {
            return a - b;
        }

        return freqB - freqA;
    });
};

const frequencySort = (arr) => {
    const countMap = {};

    arr.forEach((num) => {
        countMap[num] = (countMap[num] || 0) + 1;
    });

    return arr.sort((a, b) => {
        const freqA = countMap[a];
        const freqB = countMap[b];

        return freqB - freqA || a - b;
    });
};