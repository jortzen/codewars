const score = (dice) => {
    const count = Array(7).fill(0);
    dice.forEach((num) => count[num]++);

    const scoreFromTriples = () => {
        return count.reduce((total, num, index) => {
            return (
                total + Math.floor(num / 3) * (index === 1 ? 1000 : index * 100)
            );
        }, 0);
    };

    const scoreFromSingles = () => {
        return (count[1] % 3) * 100 + (count[5] % 3) * 50;
    };

    return scoreFromTriples() + scoreFromSingles();
};

const scoreGreed = (dice) => {
    const counts = Array(7).fill(0);
    dice.forEach((num) => counts[num]++);

    let score = 0;

    if (counts[1] >= 3) {
        score += 1000;
        counts[1] -= 3;
    }

    for (let i = 2; i <= 6; i++) {
        if (counts[i] >= 3) {
            score += i * 100;
            counts[i] -= 3;
        }
    }

    score += counts[1] * 100 + counts[5] * 50;

    return score;
};

const calculateScore = (dice) => {
    const counts = Array(7).fill(0);
    dice.forEach((num) => counts[num]++);

    let score = 0;

    score += Math.floor(counts[1] / 3) * 1000 + (counts[1] % 3) * 100;

    for (let i = 2; i <= 6; i++) {
        score += Math.floor(counts[i] / 3) * i * 100;
    }

    score += (counts[5] % 3) * 50;
    
    return score;
};