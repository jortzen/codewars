const findMissingLetter = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
            return String.fromCharCode(array[i].charCodeAt(0) + 1);
        }
    }
};

const findMissingLetterReduce = (array) =>
    array.reduce(
        (missing, curr, i, arr) =>
            arr[i + 1] && curr.charCodeAt(0) + 1 !== arr[i + 1].charCodeAt(0)
                ? String.fromCharCode(curr.charCodeAt(0) + 1)
                : missing,
        ""
    );

const findMissingLetterMap = (array) => {
    let missing = "";

    array.map((letter, i) => {
        if (
            array[i + 1] &&
            letter.charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)
        ) {
            missing = String.fromCharCode(letter.charCodeAt(0) + 1);
        }
    });

    return missing;
};

const findMissingLetterLoop = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        const expectedCharCode = array[i].charCodeAt(0) + 1;
        if (expectedCharCode !== array[i + 1].charCodeAt(0)) {
            return String.fromCharCode(expectedCharCode);
        }
    }
};