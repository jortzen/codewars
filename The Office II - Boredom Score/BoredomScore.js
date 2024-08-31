const boredom = (staff) => {
    const scores = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
    };

    const total = Object.values(staff).reduce(
        (sum, dept) => sum + scores[dept],
        0
    );

    return total >= 100
        ? "party time!!"
        : total > 80
        ? "i can handle this"
        : "kill me now";
};

const evaluateTeam = (staff) => {
    const scores = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
    };

    const totalScore = Object.values(staff)
        .map((department) => scores[department])
        .reduce((sum, score) => sum + score, 0);

    return totalScore >= 100
        ? "party time!!"
        : totalScore > 80
        ? "i can handle this"
        : "kill me now";
};

const moodAssessment = (staff) => {
    const scores = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
    };

    let total = 0;
    Object.values(staff).forEach((department) => (total += scores[department]));

    return total >= 100
        ? "party time!!"
        : total > 80
        ? "i can handle this"
        : "kill me now";
};