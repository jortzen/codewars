const getPINs = (observed) => {
    const adjacent = {
        1: ["1", "2", "4"],
        2: ["1", "2", "3", "5"],
        3: ["2", "3", "6"],
        4: ["1", "4", "5", "7"],
        5: ["2", "4", "5", "6", "8"],
        6: ["3", "5", "6", "9"],
        7: ["4", "7", "8"],
        8: ["5", "7", "8", "9", "0"],
        9: ["6", "8", "9"],
        0: ["0", "8"],
    };

    return [...observed].reduce(
        (acc, digit) =>
            acc.flatMap((pin) => adjacent[digit].map((n) => pin + n)),
        [""]
    );
};

const findPINVariations = (observed) => {
    const adjacent = {
        1: ["1", "2", "4"],
        2: ["1", "2", "3", "5"],
        3: ["2", "3", "6"],
        4: ["1", "4", "5", "7"],
        5: ["2", "4", "5", "6", "8"],
        6: ["3", "5", "6", "9"],
        7: ["4", "7", "8"],
        8: ["5", "7", "8", "9", "0"],
        9: ["6", "8", "9"],
        0: ["0", "8"],
    };

    const generate = (index, path) => {
        if (index === observed.length) return [path];
        return adjacent[observed[index]].flatMap((d) =>
            generate(index + 1, path + d)
        );
    };

    return generate(0, "");
};

const calculatePINCombinations = (observed) => {
    const adjacent = {
        1: ["1", "2", "4"],
        2: ["1", "2", "3", "5"],
        3: ["2", "3", "6"],
        4: ["1", "4", "5", "7"],
        5: ["2", "4", "5", "6", "8"],
        6: ["3", "5", "6", "9"],
        7: ["4", "7", "8"],
        8: ["5", "7", "8", "9", "0"],
        9: ["6", "8", "9"],
        0: ["0", "8"],
    };

    let pins = [""];
    for (let digit of observed) {
        let newPins = [];
        for (let pin of pins) {
            for (let nextDigit of adjacent[digit]) {
                newPins.push(pin + nextDigit);
            }
        }
        pins = newPins;
    }
    return pins;
};