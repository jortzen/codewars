const towerBuilder = (nFloors) => {
    let tower = [];

    for (let i = 0; i < nFloors; i++) {
        const spaces = " ".repeat(nFloors - i - 1);
        const stars = "*".repeat(2 * i + 1);
        tower.push(spaces + stars + spaces);
    }

    return tower;
};

const towerMap = (nFloors) =>
    Array.from(
        { length: nFloors },
        (_, i) =>
            " ".repeat(nFloors - i - 1) +
            "*".repeat(2 * i + 1) +
            " ".repeat(nFloors - i - 1)
    );

const towerStringManip = (nFloors) => {
    const maxStars = 2 * nFloors - 1;
    
    return Array.from({ length: nFloors }, (_, i) =>
        "*"
            .repeat(2 * i + 1)
            .padStart(i + nFloors)
            .padEnd(maxStars)
    );
};
