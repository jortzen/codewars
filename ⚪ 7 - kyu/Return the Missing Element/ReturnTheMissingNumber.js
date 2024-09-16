const getMissingElement = (superImportantArray) =>
    45 - superImportantArray.reduce((acc, num) => acc + num, 0);

const findMissingXOR = (superImportantArray) =>
    superImportantArray.reduce((acc, num) => acc ^ num, 0) ^ 45;

const findMissingNumber = (superImportantArray) => {
    for (let index = 0; index <= 9; index++) {
        if (!superImportantArray.includes(index)) {
            return index;
        }
    }
};