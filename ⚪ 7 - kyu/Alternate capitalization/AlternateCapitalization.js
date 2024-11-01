const capitalize = (s) => {
    let even = "",
        odd = "";

    for (let i = 0; i < s.length; i++) {
        even += i % 2 === 0 ? s[i].toUpperCase() : s[i];
        odd += i % 2 !== 0 ? s[i].toUpperCase() : s[i];
    }

    return [even, odd];
};

const alternateCapitalize = (s) => [
    [...s].map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch)).join(""),
    [...s].map((ch, i) => (i % 2 !== 0 ? ch.toUpperCase() : ch)).join(""),
];

const capitalizeRecursively = (s, even = "", odd = "", i = 0) => {
    if (i >= s.length) return [even, odd];
    
    return capitalizeRecursively(
        s,
        even + (i % 2 === 0 ? s[i].toUpperCase() : s[i]),
        odd + (i % 2 !== 0 ? s[i].toUpperCase() : s[i]),
        i + 1
    );
};
