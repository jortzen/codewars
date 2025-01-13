const beeramid = (bonus, price) => {
    let levels = 0,
        totalCost = 0;

    while (totalCost + Math.pow(levels + 1, 2) * price <= bonus) {
        levels++;
        totalCost += Math.pow(levels, 2) * price;
    }

    return levels;
};

const beeramidLevels = (bonus, price, level = 1) => {
    const cost = Math.pow(level, 2) * price;

    return bonus >= cost
        ? beeramidLevels(bonus - cost, price, level + 1)
        : level - 1;
};

const buildBeerPyramid = (bonus, price) => {
    let levels = 0,
        cost;

    do {
        cost = Math.pow(levels + 1, 2) * price;
        if (bonus >= cost) {
            levels++;
            bonus -= cost;
        }
    } while (bonus >= cost);

    return levels;
};