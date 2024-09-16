const descendingOrder = (n) => {
    return Number(
        String(n)
            .split("")
            .sort((a, b) => b - a)
            .join("")
    );
};

const descendingOrderMapReverse = (n) => {
    return Number(
        [...String(n)]
            .map(Number)
            .sort((a, b) => b - a)
            .join("")
    );
};

const descendingOrderSet = (n) => {
    const sortedDigits = String(n)
        .split("")
        .sort((a, b) => b - a);

    return parseInt(sortedDigits.join(""), 10);
};