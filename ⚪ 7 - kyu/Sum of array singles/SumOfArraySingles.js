const repeats = (arr) => {
    const frequencyMap = new Map();

    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let sum = 0;
    for (const [num, count] of frequencyMap.entries()) {
        if (count === 1) {
            sum += num;
        }
    }

    return sum;
};

const repeatsFilter = (arr) => {
    return arr
        .filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))
        .reduce((sum, num) => sum + num, 0);
};

const repeatsSet = (arr) => {
    const seen = new Set();
    let sum = 0;

    for (const num of arr) {
        if (seen.has(num)) {
            sum -= num;
        } else {
            seen.add(num);
            sum += num;
        }
    }

    return sum;
};