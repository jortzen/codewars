const nbYear = (p0, percent, aug, p) => {
    let years = 0;
    const percentIncrease = percent / 100;

    while (p0 < p) {
        p0 += Math.floor(p0 * percentIncrease) + aug;
        years++;
    }

    return years;
};

const calculateYears = (p0, percent, aug, p) => {
    let years = 0;
    percent /= 100;

    for (; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent + aug);
    }

    return years;
};

const yearsUntilPopulationReaches = (p0, percent, aug, p) => {
    let years = 0;
    percent /= 100;

    do {
        p0 = Math.floor(p0 + p0 * percent + aug);
        years++;
    } while (p0 < p);

    return years;
};
