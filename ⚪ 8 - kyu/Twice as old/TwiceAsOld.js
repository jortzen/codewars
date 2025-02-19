const twiceAsOld = (dadYearsOld, sonYearsOld) =>
    Math.abs(dadYearsOld - 2 * sonYearsOld);

const twiceAsOldLoop = (dadYearsOld, sonYearsOld) => {
    let years = 0;

    while (dadYearsOld !== 2 * sonYearsOld) {
        dadYearsOld * 2 * sonYearsOld ? dadYearsOld-- : dadYearsOld++;
        years++;
    }

    return years;
};

const twiceAsOldMath = (dadYearsOld, sonYearsOld) => {
    let diff = dadYearsOld - 2 * sonYearsOld;
    return diff >= 0 ? diff : -diff;
};