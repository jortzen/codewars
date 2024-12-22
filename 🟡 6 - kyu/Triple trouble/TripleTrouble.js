const tripledouble = (num1, num2) => {
    for (let digit = 0; digit <= 9; digit++) {
        const triple = `${digit}${digit}${digit}`;
        const double = `${digit}${digit}`;
        if (
            num1.toString().includes(triple) &&
            num2.toString().includes(double)
        ) {
            return 1;
        }
    }

    return 0;
};

const detectTripleDouble = (num1, num2) => {
    const str1 = num1.toString();
    const str2 = num2.toString();

    for (let i = 0; i <= 9; i++) {
        const triple = new Array(3).fill(i).join("");
        const double = new Array(2).fill(i).join("");
        if (str1.includes(triple) && str2.includes(double)) {
            return 1;
        }
    }

    return 0;
};

const tripleDoubleMatch = (num1, num2) => {
    const num1Str = num1.toString();
    const num2Str = num2.toString();

    for (let digit = 0; digit <= 9; digit++) {
        const triplePattern = new RegExp(`${digit}{3}`);
        const doublePattern = new RegExp(`${digit}{2}`);
        if (triplePattern.test(num1Str) && doublePattern.test(num2Str)) {
            return 1;
        }
    }
    
    return 0;
};