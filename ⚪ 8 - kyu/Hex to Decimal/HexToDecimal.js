const hexToDec = (hexString) => {
    return parseInt(hexString, 16);
};

const quirkyHexToDec = (hexString) => {
    const hexMap = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    };

    let isNegative = false;

    if (hexString[0] === "-") {
        isNegative = true;
        hexString = hexString.slice(1);
    }

    const decimal = hexString
        .toLowerCase()
        .split("")
        .reverse()
        .reduce((acc, char, index) => {
            return acc + hexMap[char] * Math.pow(16, index);
        }, 0);

    return isNegative ? -decimal : decimal;
};

const recursiveHexToDec = (hexString) => {
    const hexMap = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    };

    const convertRecursively = (str, index = 0) => {
        if (index === str.length) return 0; 
        const currentChar = str[index].toLowerCase();
        return (
            hexMap[currentChar] * Math.pow(16, str.length - 1 - index) +
            convertRecursively(str, index + 1)
        );
    };

    if (hexString[0] === "-") {
        return -convertRecursively(hexString.slice(1));
    }

    return convertRecursively(hexString);
};