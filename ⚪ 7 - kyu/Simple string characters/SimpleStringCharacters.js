const solve = (s) => [
    (s.match(/[A-Z]/g) || []).length,
    (s.match(/[a-z]/g) || []).length,
    (s.match(/[0-9]/g) || []).length,
    (s.match(/[^A-Za-z0-9]/g) || []).length,
];

const countChars = (s) => {
    let upper = 0,
        lower = 0,
        numbers = 0,
        special = 0;

    for (const char of s) {
        if (/[A-Z]/.test(char)) upper++;
        else if (/[a-z]/.test(char)) lower++;
        else if (/\d/.test(char)) numbers++;
        else special++;
    }

    return [upper, lower, numbers, special];
};

const countCharacters = (s) => {
    return [...s].reduce(
        (acc, char) => {
            if (/[A-Z]/.test(char)) acc[0]++;
            else if (/[a-z]/.test(char)) acc[1]++;
            else if (/[0-9]/.test(char)) acc[2]++;
            else acc[3]++;
            return acc;
        },
        [0, 0, 0, 0]
    );
};