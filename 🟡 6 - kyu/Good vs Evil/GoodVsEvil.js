const goodVsEvil = (good, evil) => {
    const goodWorth = [1, 2, 3, 3, 4, 10];
    const evilWorth = [1, 2, 2, 2, 3, 5, 10];

    const goodTotal = good
        .split(" ")
        .reduce((sum, count, index) => sum + count * goodWorth[index], 0);

    const evilTotal = evil
        .split(" ")
        .reduce((sum, count, index) => sum + count * evilWorth[index], 0);

    if (goodTotal > evilTotal) {
        return "Battle Result: Good triumphs over Evil";
    } else if (evilTotal > goodTotal) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
};

const goodVsEvilForLoop = (good, evil) => {
    const goodWorth = [1, 2, 3, 3, 4, 10];
    const evilWorth = [1, 2, 2, 2, 3, 5, 10];

    let goodTotal = 0;
    const goodCounts = good.split(" ");
    for (let i = 0; i < goodCounts.length; i++) {
        goodTotal += goodCounts[i] * goodWorth[i];
    }

    let evilTotal = 0;
    const evilCounts = evil.split(" ");
    for (let i = 0; i < evilCounts.length; i++) {
        evilTotal += evilCounts[i] * evilWorth[i];
    }

    if (goodTotal > evilTotal) {
        return "Battle Result: Good triumphs over Evil";
    } else if (evilTotal > goodTotal) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
};

const goodVsEvilSingleLoop = (good, evil) => {
    const goodWorth = [1, 2, 3, 3, 4, 10];
    const evilWorth = [1, 2, 2, 2, 3, 5, 10];

    const goodCounts = good.split(" ");
    const evilCounts = evil.split(" ");

    let goodTotal = 0;
    let evilTotal = 0;

    for (let i = 0; i < goodCounts.length; i++) {
        goodTotal += goodCounts[i] * goodWorth[i];
    }

    for (let i = 0; i < evilCounts.length; i++) {
        evilTotal += evilCounts[i] * evilWorth[i];
    }

    if (goodTotal > evilTotal) {
        return "Battle Result: Good triumphs over Evil";
    } else if (evilTotal > goodTotal) {
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
};