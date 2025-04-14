const alphabetWar = (fight) => {
    const power = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };
    const score = [...fight].reduce((sum, ch) => sum + (power[ch] || 0), 0);
    return score > 0
        ? "Left side wins!"
        : score < 0
        ? "Right side wins!"
        : "Let's fight again!";
};

const resolveWar = (fight) => {
    const left = { w: 4, p: 3, b: 2, s: 1 };
    const right = { m: 4, q: 3, d: 2, z: 1 };

    let leftPower = 0,
        rightPower = 0;
    for (let ch of fight) {
        if (left[ch]) leftPower += left[ch];
        if (right[ch]) rightPower += right[ch];
    }

    return leftPower > rightPower
        ? "Left side wins!"
        : rightPower > leftPower
        ? "Right side wins!"
        : "Let's fight again!";
};

const warOutcome = (fight) => {
    const countPower = (side) =>
        fight.split("").reduce((acc, ch) => acc + (side[ch] || 0), 0);
    const left = { w: 4, p: 3, b: 2, s: 1 };
    const right = { m: 4, q: 3, d: 2, z: 1 };

    const leftScore = countPower(left);
    const rightScore = countPower(right);

    return leftScore > rightScore
        ? "Left side wins!"
        : rightScore > leftScore
        ? "Right side wins!"
        : "Let's fight again!";
};