const betterThanAverage = (classPoints, yourPoints) => {
    const average =
        (classPoints.reduce((sum, score) => sum + score, 0) + yourPoints) /
        (classPoints.length + 1);

    return yourPoints > average;
};

const isAboveAverage = (classPoints, yourPoints) => {
    const totalPoints =
        classPoints.reduce((acc, score) => acc + score, 0) + yourPoints;

    const average = totalPoints / (classPoints.length + 1);

    return yourPoints > average;
};

const surpassesAverage = (scores, myScore) => {
    const totalScores = scores.reduce((sum, score) => sum + score, 0) + myScore;

    const avgScore = totalScores / (scores.length + 1);
    
    return myScore > avgScore;
};