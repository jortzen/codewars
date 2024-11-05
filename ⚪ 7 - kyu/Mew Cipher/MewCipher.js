const decipher = (code) => {
    const length = code.length;
    const charCount = code[0].length;

    let result = "";

    for (let i = 0; i < charCount; i++) {
        let sum = 0;

        for (let j = 0; j < length; j++) {
            const char = code[j][i];
            sum += char === " " ? 0 : char.charCodeAt(0) - 96;
        }

        const avg = Math.floor(sum / length);
        result += avg === 0 ? " " : String.fromCharCode(avg + 96);
    }

    return result;
};

const averageDecode = (code) => {
    const totalStrings = code.length;
    const lengthOfString = code[0].length;

    let finalString = "";

    for (let i = 0; i < lengthOfString; i++) {
        let accumulatedValue = 0;

        for (let j = 0; j < totalStrings; j++) {
            const char = code[j][i];
            accumulatedValue += char === " " ? 0 : char.charCodeAt(0) - 96;
        }

        const averageValue = Math.floor(accumulatedValue / totalStrings);

        finalString +=
            averageValue === 0 ? " " : String.fromCharCode(averageValue + 96);
    }

    return finalString;
};

const unravelCode  = (code) => {
    const n = code.length;
    const m = code[0].length;

    return Array.from({ length: m }, (_, i) => {
        const sum = code.reduce(
            (acc, str) => acc + (str[i] === " " ? 0 : str.charCodeAt(i) - 96),
            0
        );

        const avg = Math.floor(sum / n);

        return avg === 0 ? " " : String.fromCharCode(avg + 96);
    }).join("");
};