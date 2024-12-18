const solution = (number) => {
    const romanMap = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    let result = "";
    romanMap.forEach(([symbol, value]) => {
        while (number >= value) {
            result += symbol;
            number -= value;
        }
    });

    return result;
};

const toRomanRecursive = (
    number,
    romanMap = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ],
    result = ""
) =>
    number === 0
        ? result
        : toRomanRecursive(
              number - romanMap.find(([_, value]) => value <= number)[1],
              romanMap,
              result + romanMap.find(([_, value]) => value <= number)[0]
          );

const toRomanReduce = (number) => {
    const romanMap = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];
    return romanMap.reduce((result, [symbol, value]) => {
        while (number >= value) {
            result += symbol;
            number -= value;
        }
        return result;
    }, "");
};