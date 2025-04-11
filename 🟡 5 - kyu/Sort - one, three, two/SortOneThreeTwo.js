const sortByName = (ary) => {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const toWords = (n) => {
        if (n < 10) return ones[n];
        if (n < 20) return teens[n - 10];
        if (n < 100)
            return `${tens[Math.floor(n / 10)]} ${
                n % 10 ? ones[n % 10] : ""
            }`.trim();
        if (n < 1000) {
            const rem = n % 100;
            const remWords = rem ? ` ${toWords(rem)}` : "";
            return `${ones[Math.floor(n / 100)]} hundred${remWords}`;
        }
        return "";
    };

    return ary.slice().sort((a, b) => {
        const nameA = toWords(a);
        const nameB = toWords(b);
        return nameA.localeCompare(nameB);
    });
};

const nameSort = (ary) => {
    const numToWord = (n) => {
        const ones = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ];
        const teens = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        const tens = [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];

        if (n < 10) return ones[n];
        if (n < 20) return teens[n - 10];
        if (n < 100)
            return `${tens[Math.floor(n / 10)]}${
                n % 10 ? " " + ones[n % 10] : ""
            }`;

        const rem = n % 100;
        return `${ones[Math.floor(n / 100)]} hundred${
            rem ? " " + numToWord(rem) : ""
        }`;
    };

    return [...ary].sort((a, b) => numToWord(a).localeCompare(numToWord(b)));
};

const sortNumbersBySpelling = (arr) => {
    const toName = (n) => {
        const o = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ];
        const t = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        const x = [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];

        if (n < 10) return o[n];
        if (n < 20) return t[n - 10];
        if (n < 100)
            return `${x[Math.floor(n / 10)]}${n % 10 ? " " + o[n % 10] : ""}`;
        return `${o[Math.floor(n / 100)]} hundred${
            n % 100 ? " " + toName(n % 100) : ""
        }`;
    };

    return arr.slice().sort((a, b) => toName(a).localeCompare(toName(b)));
};