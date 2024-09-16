const outed = (meet, boss) => {
    const totalScore = Object.values(meet).reduce(
        (acc, score, _, arr) => acc + score + (arr.length - 1 ? 0 : meet[boss]),
        0
    );

    const adjustedTotal = totalScore + meet[boss];
    const averageScore = adjustedTotal / Object.keys(meet).length;

    return averageScore <= 5 ? "Get Out Now!" : "Nice Work Champ!";
};

const happinessReport = (meet, boss) => {
    const scores = Object.keys(meet).map((person) =>
        person === boss ? meet[person] * 2 : meet[person]
    );
    return scores.every(
        (score) => scores.reduce((a, b) => a + b, 0) / scores.length > 5
    )
        ? "Nice Work Champ!"
        : "Get Out Now!";
};

const calculateHappiness = (meet, boss) => {
    let total = 0, count = 0;
    for (let name in meet) {
        total += name === boss ? meet[name] * 2 : meet[name];
        count++;
    }
    return (total / count) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
};