const nbMonths = (
    startPriceOld,
    startPriceNew,
    savingPerMonth,
    percentLossByMonth
) => {
    let months = 0,
        savings = 0;

    while (startPriceOld + savings < startPriceNew) {
        months++;
        if (months % 2 === 0) percentLossByMonth += 0.5;
        startPriceOld -= startPriceOld * (percentLossByMonth / 100);
        startPriceNew -= startPriceNew * (percentLossByMonth / 100);
        savings += savingPerMonth;
    }

    return [months, Math.round(startPriceOld + savings - startPriceNew)];
};

const trackCarDepreciation = (
    startPriceOld,
    startPriceNew,
    savingPerMonth,
    percentLossByMonth
) => {
    let state = {
        months: 0,
        savings: 0,
        oldPrice: startPriceOld,
        newPrice: startPriceNew,
    };

    while (state.oldPrice + state.savings < state.newPrice) {
        state.months++;
        if (state.months % 2 === 0) percentLossByMonth += 0.5;
        state.oldPrice *= 1 - percentLossByMonth / 100;
        state.newPrice *= 1 - percentLossByMonth / 100;
        state.savings += savingPerMonth;
    }

    return [
        state.months,
        Math.round(state.oldPrice + state.savings - state.newPrice),
    ];
};