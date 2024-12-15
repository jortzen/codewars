const solution = (roman) => {
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = romanMap[roman[i]];
        const next = romanMap[roman[i + 1]] || 0;

        total += current < next ? -current : current;
    }

    return total;
};

const romanToIntReduce = (roman) => {
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    return [...roman].reduce((total, char, i, arr) => {
        const current = romanMap[char];
        const next = romanMap[arr[i + 1]] || 0;

        return total + (current < next ? -current : current);
    }, 0);
};

const romanToIntRecursive = (
    roman,
    romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
) => {
    if (roman.length === 0) return 0;

    const [first, second] = [romanMap[roman[0]], romanMap[roman[1]] || 0];

    return first < second
        ? romanToIntRecursive(roman.slice(2)) + (second - first)
        : romanToIntRecursive(roman.slice(1)) + first;
};