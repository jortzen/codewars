const maxBall = (v0) => {
    const g = 9.81;
    const v0_mps = (v0 * 1000) / 3600;

    let maxHeight = 0;
    let maxTime = 0;
    let t = 0;

    while (true) {
        const height = v0_mps * t - 0.5 * g * t * t;

        if (height < maxHeight) break;

        if (height > maxHeight) {
            maxHeight = height;
            maxTime = t;
        }

        t += 0.1;
    }

    return Math.round(maxTime * 10);
};

const maxBallFormula = (v0) => {
    const g = 9.81;
    const v0_mps = (v0 * 1000) / 3600;
    const tMax = v0_mps / g;

    return Math.round(tMax * 10);
};

const maxBallForLoop = (v0) => {
    const g = 9.81;
    const v0_mps = (v0 * 1000) / 3600;

    let maxHeight = 0;
    let maxTime = 0;

    for (let t = 0; t < 1000; t += 0.1) {
        const height = v0_mps * t - 0.5 * g * t * t;
        if (height < maxHeight) break;
        if (height > maxHeight) {
            maxHeight = height;
            maxTime = t;
        }
    }

    return Math.round(maxTime * 10);
};

const maxBallRecursive = (v0, t = 0, maxHeight = 0, maxTime = 0) => {
    const g = 9.81;
    const v0_mps = (v0 * 1000) / 3600;
    const height = v0_mps * t - 0.5 * g * t * t;

    if (height < maxHeight) {
        return Math.round(maxTime * 10);
    }

    if (height > maxHeight) {
        maxHeight = height;
        maxTime = t;
    }

    return maxBallRecursive(v0, t + 0.1, maxHeight, maxTime);
};