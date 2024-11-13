const isValidWalk = (walk) => {
    if (walk.length !== 10) return false;

    let vertical = 0,
        horizontal = 0;

    for (const step of walk) {
        if (step === "n") vertical++;
        if (step === "s") vertical--;
        if (step === "e") horizontal++;
        if (step === "w") horizontal--;
    }

    return vertical === 0 && horizontal === 0;
};

const isValidWalkMap = (walk) => {
    if (walk.length !== 10) return false;

    const directionMap = new Map([
        ["n", 1],
        ["s", -1],
        ["e", 1],
        ["w", -1],
    ]);

    let vertical = 0,
        horizontal = 0;

    for (const step of walk) {
        if (step === "n" || step === "s") vertical += directionMap.get(step);
        if (step === "e" || step === "w") horizontal += directionMap.get(step);
    }

    return vertical === 0 && horizontal === 0;
};

const isValidWalkCounts = (walk) => {
    if (walk.length !== 10) return false;

    const counts = { n: 0, s: 0, e: 0, w: 0 };

    for (const step of walk) {
        counts[step]++;
    }

    return counts["n"] === counts["s"] && counts["e"] === counts["w"];
};