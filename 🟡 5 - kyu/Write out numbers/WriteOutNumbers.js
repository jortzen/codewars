const number2words = (n) => {
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

    const convertHundreds = (num) => {
        if (num < 10) return ones[num];
        if (num < 20) return teens[num - 10];
        if (num < 100)
            return (
                tens[Math.floor(num / 10)] +
                (num % 10 ? `-${ones[num % 10]}` : "")
            );
        return (
            ones[Math.floor(num / 100)] +
            " hundred" +
            (num % 100 ? ` ${convertHundreds(num % 100)}` : "")
        );
    };

    if (n < 1000) return convertHundreds(n);

    let thousands = Math.floor(n / 1000);
    let remainder = n % 1000;

    return (
        convertHundreds(thousands) +
        " thousand" +
        (remainder ? ` ${convertHundreds(remainder)}` : "")
    );
};

const numToWords = (n) => {
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
        return tens[Math.floor(n / 10)] + (n % 10 ? `-${ones[n % 10]}` : "");
    if (n < 1000)
        return (
            ones[Math.floor(n / 100)] +
            " hundred" +
            (n % 100 ? ` ${numToWords(n % 100)}` : "")
        );

    let thousandPart = Math.floor(n / 1000);
    let remainder = n % 1000;
    return (
        numToWords(thousandPart) +
        " thousand" +
        (remainder ? ` ${numToWords(remainder)}` : "")
    );
};