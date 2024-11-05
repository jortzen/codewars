const addBinary = (a, b) => {
    return (a + b).toString(2);
};

const binaryAddition = (a, b) => {
    let sum = a + b;
    let binary = "";

    do {
        binary = (sum % 2) + binary;
        sum = Math.floor(sum / 2);
    } while (sum > 0);

    return binary;
};

const combineToBinary  = (a, b) => {
    const sum = a + b;
    let binary = "";

    for (let i = sum; i > 0; i = Math.floor(i / 2)) {
        binary = (i % 2) + binary;
    }

    return binary || "0";
};