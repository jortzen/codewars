const smallest = (n) => {
    const str = n.toString();

    return [...str].reduce(
        (min, _, i) =>
            [...str].reduce((min, _, j) => {
                if (i === j) return min;
                const temp = str.slice(0, i) + str.slice(i + 1);
                const newNum = +(temp.slice(0, j) + str[i] + temp.slice(j));
                return newNum < min[0] ? [newNum, i, j] : min;
            }, min),
        [n, 0, 0]
    );
};

const smallestRearrangement = (n) => {
    const digits = [...n.toString()];

    return digits.reduce(
        (min, _, i) =>
            digits.reduce((min, _, j) => {
                const temp = [...digits];
                const [digit] = temp.splice(i, 1);
                temp.splice(j, 0, digit);
                const newNum = +temp.join("");
                return newNum < min[0] ? [newNum, i, j] : min;
            }, min),
        [n, 0, 0]
    );
};

const smallestShift = (n) => {
    const digits = [...n.toString()];

    return digits.reduce(
        (min, _, i) =>
            digits.reduce((min, _, j) => {
                if (i === j) return min;
                const moved = [...digits];
                const [digit] = moved.splice(i, 1);
                moved.splice(j, 0, digit);
                const num = +moved.join("");
                return num < min[0] ? [num, i, j] : min;
            }, min),
        [n, 0, 0]
    );
};