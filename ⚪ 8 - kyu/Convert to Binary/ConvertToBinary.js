const binaryToDecimal = (n) => parseInt(n.toString(2));

const bitwiseBinary = (n) => +n.toString(2);

const customBinary = (n) => {
    let binaryStr = "";

    while (n > 0) {
        binaryStr = (n % 2) + binaryStr;
        n = Math.floor(n / 2);
    }

    return +binaryStr;
};